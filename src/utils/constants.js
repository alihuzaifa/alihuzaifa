import Iti from "../assets/iti.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import reactjs from "../assets/reactjs.png";
import redux from "../assets/redux.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
import firebase from "../assets/firebase.png";
import galaxymart from "../assets/projects/galaxymart.png";
import takeaway from "../assets/projects/takeaway.png";
import ZainFitness from "../assets/projects/zainfitness.png";
import shopEasy from "../assets/projects/shopeasy.jpeg";
import { useMediaQuery } from "@mui/material";
export const MainColor = "#6969cd";
export const Grey = "#d4d0d9";
export const Skillss = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
];
export const WorkingExperience = [
  {
    img: Iti,
    title: "Full Stack Facilitator",
    place: "Karachi, Pakistan",
    date: "Jan 2023 - Present",
    description: [
      "Hey there! I'm a talented full stack developer with a passion for crafting stunning apps using React, JavaScript, and React Native. I'm not just about code – I create digital wonders! Whether it's on the web or mobile, I bring ideas to life. And guess what? I'm not just about creation; I'm a good at deploying apps to domains too. Let's make your digital dreams a reality!",
    ],
  },
  {
    img: Iti,
    title: "Frontend Developer",
    place: "Entrollics Pakistan",
    date: "October 2022 to Jan 2023",
    description: [
      "I'm exploring the digital world as a keen Frontend Developer, creating cool web experiences.",
      "I turn design ideas into perfect-looking websites using HTML, CSS, and JavaScript.",
      "I'm really good at making designs work on different devices and making sure they're easy to use.",
      "I'm working closely with designers and people who build the hidden parts of websites to make everything fit together and look great.",
      "I'm always learning about new tech stuff and staying up-to-date with cool things happening in frontend development.",
      "Every time I write a line of code, I'm helping to make exciting new things in technology.",
    ],
  },
  {
    img: Iti,
    title: "Frontend Developer Intern",
    place: "Saylani Mass IT Training, Karachi, Pakistan",
    date: "Jun 2022 - Oct 2022",
    description: [
      "I had an exciting internship at Saylani Mass IT Training where I learned to be a Frontend Developer.",
      "I turned designs into cool websites using HTML, CSS, and JavaScript.",
      "I focused on making websites work well on all devices, making them look nice, and making them fast.",
      "I worked closely with other teams to make sure everything fits together and looks great.",
      "I also learned about new tech stuff to stay up-to-date in the tech world.",
      "Every piece of code I wrote added to making new and exciting things.",
    ],
  },
];
export const Projectss = [
  {
    img: galaxymart,
    title: "GALAXY MART",
    subTitle:
      "As the developer behind Galaxy Mart, I've crafted a seamless online shopping experience. From electronics to fashion, our diverse range of products is just a click away. With a user-friendly interface, secure checkout, and efficient delivery, I've brought convenience and quality to every shopper. Explore Galaxy Mart today for a delightful shopping journey!.",
    tech: [
      {
        name: "react",
        color: "#a1e9ff",
      },
      {
        name: "material ui",
        color: "#ffc8ae",
      },
      {
        name: "tailwind css",
        color: "#a1e9ff",
      },
      {
        name: "firebase",
        color: "#ffc8ae",
      },
    ],
    demo: "https://galaxymart.ltd/",
    github: "https://github.com/alihuzaifa/Al-Hamza-Store",
  },
  {
    img: takeaway,
    title: "Takeaway",
    subTitle:
      "Indulge in a world of flavors with Takeaway, your go-to food delivery platform. Browse a diverse menu of delectable dishes, from comfort classics to exotic delights, all conveniently delivered to your doorstep. With a seamless ordering process, Takeaway ensures a hassle-free culinary experience. Satisfy your cravings and savor every bite with Takeaway!.",
    tech: [
      {
        name: "react",
        color: "#a1e9ff",
      },
      {
        name: "tailwind css",
        color: "#a1e9ff",
      },
      {
        name: "nodejs",
        color: "#ffcc80",
      },
      {
        name: "mongodb",
        color: "#a5d6a7",
      },
      {
        name: "express js",
        color: "#a5d6a7",
      },
    ],
    demo: "https://the-takeaway.web.app/",
    github: "https://github.com/alihuzaifa/food-web-mern/tree/master/web",
  },
  {
    img: ZainFitness,
    title: "Zain Fitness",
    subTitle:
      "Zain Gym Fitness Center is your ultimate destination for fitness excellence. Our cutting-edge facility, certified trainers, and tailored programs empower you to achieve your health and fitness goals. From personalized training to dynamic group classes, we provide comprehensive support. Elevate your well-being with us, where holistic health and community are at the core of our mission. Begin your transformation journey at Zain Gym today!",
    tech: [
      {
        name: "react-typescript",
        color: "#a1e9ff",
      },
      {
        name: "MUI 5",
        color: "#2828f7",
      },
    ],
    demo: "https://zain-fitness.web.app/",
  },
  {
    img: shopEasy,
    title: "Shop Easy",
    subTitle: `Home Screen: This is where you start. It looks nice and is easy to use. It shows you cool products and deals. You can also find different categories here.

    Search Screen: If you want to find something specific, use this screen. You can type in words to search, look through categories, and get suggestions to help you.
    
    Detailed Screen: When you find something you like, click on it. You'll see big pictures, a description, details, what others think, and ways to buy it.
    
    Cart Screen: When you're ready to buy, go here. It shows what you're buying, lets you change how many you want, use promo codes, and tells you how your stuff will get to you. It makes shopping easy.D`,
    tech: [
      {
        name: "react-native-typescript",
        color: "#a1e9ff",
      },
    ],
    demo: "https://drive.google.com/file/d/1x8GoEWrQj3DkiZBir6tZY3OWTT_j1Omy/view?usp=drive_link",
  },
];
export const useResponsiveFont = () => {
  return useMediaQuery("(min-width:600px)");
};
