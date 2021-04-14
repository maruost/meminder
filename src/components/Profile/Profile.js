import React, { useState } from "react";
import SimpleTabs from "../TabPanel/TabPanel";
import ProfileSettings from "../ProfileSettings/ProfileSettings";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import ProfileMemes from "../ProfileMemes/ProfileMemes";
import "./profile.css"

const userInfoDB = {
  _id: "dgdgdgd111",
  email: "msmsmsmsm@ya.ru",
  name: "Maria Ostapenko",
  memes: [
    "https://i.guim.co.uk/img/media/327e46c3ab049358fad80575146be9e0e65686e7/0_0_1023_742/master/1023.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=331a1bc4f5d7a96a6131f4f142065662",
    "https://pbs.twimg.com/media/DtBjcBUWkAEW4bt.jpg:large",
  ],
};

function Profile() {
  return (
    <div className="profile">
      <SimpleTabs>
        <ProfileInfo label="Обо мне" />
        <ProfileMemes label="Мои мемы" />
        <ProfileSettings label="Настройки" />
      </SimpleTabs>
    </div>
  );
}

export default Profile;
