import mem13 from "../../static/images/mems/mem13.png";
import mem6 from "../../static/images/mems/mem6.png";
import mem8 from "../../static/images/mems/mem8.png";
import mem18 from "../../static/images/mems/mem18.png";

const chats = [
  {
    _id: "sgbfmytyjj8",
    firstName: "Екатерина",
    lastName: "Колесникова",
    avatar: mem18,
    messages: [
      {
        creatorId: "ef234padk",
        timestamp: "21:21",
        message: "привет!!!!",
      },
    ],
  },
  {
    _id: "asdwefwgweg5",
    firstName: "Мария",
    lastName: "Остапенко",
    avatar: mem13,
    messages: [
      {
        creatorId: "asdwefwgweg5",
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
        creatorId: "asdwefwgweg5",
        timestamp: "13:26",
        message: "Отлично",
      },
      {
        creatorId: "asdwefwgweg5",
        timestamp: "13:27",
        message: "Хочешь анекдот?",
      },
      {
        creatorId: "ef234padk",
        timestamp: "13:29",
        message: "Давай",
      },
      {
        creatorId: "asdwefwgweg5",
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
    _id: "saaesgwer90",
    firstName: "Артём",
    lastName: "Карпов",
    avatar: mem6,
    messages: [
      {
        creatorId: "saaesgwer90",
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
    _id: "iygjfthdr6",
    firstName: "Анна",
    lastName: "Тарасова",
    avatar: mem8,
    messages: [],
  },
];

export default chats;
