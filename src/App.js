import s from "./app.module.scss";
import m from "./main.module.scss";
import "./static/fonts/fonts.css";
import { React, useState, useMemo, createRef, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import WelcomeBoard from "./components/WelcomeBoard/WelcomeBoard";
import Registration from "./components/Registration/Registration";
import Profile from "./components/Profile/Profile";
import SignIn from "./components/SignIn/SignIn";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import users from "./components/utils/users";
import ChatsPage from "./components/ChatsPage/ChatsPage";

const alreadyRemoved = [];
let peopleState = users;

function App() {
  const [people, setPeople] = useState(users);
  const [lastDirection, setLastDirection] = useState();
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem("token") || false
  );
  const [backButton, setBackButton] = useState(null);
  const [matchedPerson, setMatchedPerson] = useState({});

  useEffect(() => {
    localStorage.getItem("token") ? setLoggedIn(true) : setLoggedIn(false);
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLoginFalse = () => {
    setLoggedIn(false);
  };

  const childRefs = useMemo(
    () =>
      Array(users.length)
        .fill(0)
        .map((i) => createRef()),
    []
  );

  const swiped = (direction, nameToDelete) => {
    // console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);
  };

  const outOfFrame = (name) => {
    // console.log(name + " left the screen!");
    peopleState = peopleState.filter((character) => character.name !== name);
    setPeople(peopleState);
  };

  const swipe = (dir) => {
    const cardsLeft = people.filter(
      (person) => !alreadyRemoved.includes(person.name)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      const index = users.map((person) => person.name).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir); // Swipe the card!
    }
  };

  const handleBackButton = (path) => {
    setBackButton(path);
  };

  const handleMatch = (person) => {
    setMatchedPerson({ ...person });
  };

  return (
    <div className={s.app}>
      <Header backButton={backButton} loggedIn={loggedIn} />
      <main className={m.main}>
        <Switch>
          <ProtectedRoute
            path="/chats"
            loggedIn={loggedIn}
            onHandleBackButton={handleBackButton}
            component={ChatsPage}
          />
          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            onHandleBackButton={handleBackButton}
            onHandleLoginFalse={handleLoginFalse}
            component={Profile}
          />
          <Route path="/auth">
            {loggedIn ? (
              <Redirect to="/" />
            ) : (
              <>
                <Registration onHandleLogin={handleLogin} />
              </>
            )}
          </Route>
          <Route path="/signin">
            {loggedIn ? (
              <Redirect to="/" />
            ) : (
              <>
                <SignIn onHandleLogin={handleLogin} />
              </>
            )}
          </Route>
          <ProtectedRoute
            exact
            path="/"
            loggedIn={loggedIn}
            people={people}
            lastDirection={lastDirection}
            onSwiped={swiped}
            onSwipe={swipe}
            onOutOfFrame={outOfFrame}
            childRefs={childRefs}
            onHandleMatch={handleMatch}
            peopleState={peopleState}
            matchedPerson={matchedPerson}
            component={Main}
          />
          <Route path="/welcome-board">
            {loggedIn ? (
              <Redirect to="/" />
            ) : (
              <>
                <WelcomeBoard />
              </>
            )}
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
