import authData from "./authData";

function FakeApi() {
  const signin = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(data);
    console.log("auth", authData);
    if (email === authData.email && password === authData.password) {
      return { status: 200, token: "e1092384348384483" };
    } else {
      return { status: 400, message: "Неправильный email или пароль" };
    }
  };
  return { signin };
}

export default FakeApi;
