import "./App.css";
import { React, useState, useMemo, createRef } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import WelcomeBoard from "./components/WelcomeBoard/WelcomeBoard";
import Registration from "./components/Registration/Registration";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Result } from "./components/Result";
import Step3 from "./components/Step3";
import Chats from "./components/Chats/Chats";
import Profile from "./components/Profile/Profile";
import Chat from "./components/Chat/Chat";
import ChatScreen from "./components/ChatScreen/ChatScreen";

const db = [
  {
    _id: "dgdgdgd111",
    name: "Maria Ostapenko",
    memes: [
      "https://i.guim.co.uk/img/media/327e46c3ab049358fad80575146be9e0e65686e7/0_0_1023_742/master/1023.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=331a1bc4f5d7a96a6131f4f142065662",
      "https://pbs.twimg.com/media/DtBjcBUWkAEW4bt.jpg:large",
    ],
  },
  {
    _id: "dgdgdgd11dd1",
    name: "Masssssaaaa",
    memes: [
      "https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png",
      "https://inspirationfeed.com/wp-content/uploads/2020/05/Reaction-Meme-1.jpg",
    ],
  },
];

const alreadyRemoved = [];
let peopleState = db;

function App() {
  const [people, setPeople] = useState(db);
  const [lastDirection, setLastDirection] = useState();

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => createRef()),
    []
  );

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
    peopleState = peopleState.filter((character) => character.name !== name);
    setPeople(peopleState);
  };

  const swipe = (dir) => {
    const cardsLeft = people.filter(
      (person) => !alreadyRemoved.includes(person.name)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      const index = db.map((person) => person.name).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir); // Swipe the card!
    }
  };
  return (
    <div className="App">
      <Switch>
        <Route exact path="/welcome-board">
          <Header />
          <WelcomeBoard />
        </Route>
        <Route exact path="/">
          <Header />
          <Main
            people={people}
            lastDirection={lastDirection}
            onSwiped={swiped}
            onSwipe={swipe}
            onOutOfFrame={outOfFrame}
            childRefs={childRefs}
          />
        </Route>
        <Route exact path="/chats/:person">
          <Header backButton="/chats" />
          <ChatScreen />
        </Route>
        <Route exact path="/chats">
          <Header backButton="/" />
          <Chats />
        </Route>
        <Route exact path="/profile">
          <Header backButton="/" />
          <Profile />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
        <Route exact path="/result" component={Result}></Route>
        <Route exact path={"/step2"} component={Step2} />
        <Route exact path={"/step3"} component={Step3} />
      </Switch>
    </div>
  );
}

export default App;
