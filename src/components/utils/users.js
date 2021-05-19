import mem1 from "../../static/images/mems/meme1.png";
import mem2 from "../../static/images/mems/meme2.png";
import mem3 from "../../static/images/mems/mem3.png";
import mem4 from "../../static/images/mems/mem4.png";
import mem5 from "../../static/images/mems/mem5.png";
import mem6 from "../../static/images/mems/mem6.png";
import mem7 from "../../static/images/mems/mem7.png";
import mem8 from "../../static/images/mems/mem8.png";

// get data of users from Api, which is filtered by required papams
const users = [
  {
    _id: "dgdgdgd111",
    name: "Анастасия",
    files: [mem1, mem2],
    likes: ["sdsdcsddf78", "ef234padk"],
  },
  {
    _id: "refer432",
    name: "Андрей",
    files: [mem3, mem4],
    likes: ["ef234padk"],
  },
  {
    _id: "sdsdcsddf78",
    name: "Арина",
    files: [mem5, mem6],
    likes: [],
  },
  {
    _id: "asfdtgergerg9",
    name: "Кристина",
    files: [mem7, mem8],
    likes: ["ef234padk"],
  },
  {
    _id: "sgthryjty0",
    name: "Михаил",
    files: [mem8, mem4],
    likes: [],
  },
  {
    _id: "afetrtbrrt8",
    name: "Евгений",
    files: [
      "https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png",
      "https://inspirationfeed.com/wp-content/uploads/2020/05/Reaction-Meme-1.jpg",
    ],
    likes: [],
  },
];

export default users;
