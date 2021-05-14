import mem5 from "../../static/images/mems/mem5.png";
import mem8 from "../../static/images/mems/mem8.png";
import mem7 from "../../static/images/mems/mem7.png";

const chats = [
  {
    _id: "sdsdcsddf78",
    firstName: "Арина",
    lastName: "Кузнецова",
    avatar: mem5,
    messages: [
      {
        creatorId: "sdsdcsddf78",
        timestamp: "13:13",
        message: "Привет! Как дела?",
      },
      {
        creatorId: "ef234padk",
        timestamp: "13:14",
        message: "Привет!",
      },
      {
        creatorId: "ef234padk",
        timestamp: "13:15",
        message: "Вcё супер. Ты как?",
      },
      {
        creatorId: "sdsdcsddf78",
        timestamp: "13:26",
        message: "Отлично",
      },
      {
        creatorId: "sdsdcsddf78",
        timestamp: "13:27",
        message: "Хочешь анекдот?",
      },
      {
        creatorId: "ef234padk",
        timestamp: "13:29",
        message: "Давай",
      },
      {
        creatorId: "sdsdcsddf78",
        timestamp: "13:33",
        message: `Заходит как-то раз 🐌 в бар и подходит к бармену, заказывает стакан воды и уходит. Приходит на следующий день, снова заказывает стакан воды и так ещё несколько дней подряд. 
        В какой-то из дней, бармен спрашивает у улитки: 
          - Улитка, почему ты заказываешь воду, ведь у меня столько алкоголя?
          Улитка ему отвечает:
          - Не сейчас, у меня дом горит.`,
      },
    ],
  },
  {
    _id: "sgthryjty0",
    firstName: "Михаил",
    lastName: "Иванов",
    avatar: mem8,
    messages: [
      {
        creatorId: "sgthryjty0",
        timestamp: "12:12",
        message: "АХАХАХАХахахахххаа",
      },
      {
        creatorId: "ef234padk",
        timestamp: "12:26",
        message: ":)))",
      },
    ],
  },
  {
    _id: "afetrtbrrt8",
    firstName: "Евгений",
    lastName: "Михайлов",
    avatar: "https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png",
    messages: [],
  },
  {
    _id: "asfdtgergerg9",
    firstName: "Кристина",
    lastName: "Петрова",
    avatar: mem7,
    messages: [
      {
        creatorId: "ef234padk",
        timestamp: "11:21",
        message: "Привет",
      },
    ],
  },
];

export default chats;
