import discord from "../assets/projects/discord.png";
import devtinder from "../assets/projects/devtinder.png";
import booksica from "../assets/projects/booksica.png";
import foodresto from "../assets/projects/foodresto.png";
import meteoto from "../assets/projects/meteoto.png";
import portfolio from "../assets/projects/portfolio.png";
import racing from "../assets/projects/racing.png";
import usability from "../assets/projects/usability.png";

export const ProjectList = [
  {
    id: 1,
    name: "Dev Tinder",
    description:
      "Created DevTinder, a networking platform designed for developers to connect, collaborate, and share opportunities. Users can build detailed profiles showcasing their skills, interests, and projects. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), DevTinder allows developers to create profiles, match based on skills and interests, fostering community and collaboration.",
    img: devtinder,
    //max 6 tech stack
    tech: ["React.js", "Tailwind CSS", "Mongo DB", "Node.js", "Express", "JWT"],
    source: "https://github.com/krishnapandey0192",
    demo: null,
  },
  {
    id: 2,
    name: "Booksica Dashboard",
    description:
      "Developed the Booksica Dashboard, a book-selling platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This dashboard enables seamless management of books, users, and orders, providing an intuitive interface for administrators to oversee platform operations efficiently.",
    img: booksica,
    //max 6 tech stack
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Material UI",
    ],
    source: "https://github.com/krishnapandey0192",
    demo: "https://booksica.com/?categoriesId=6593bb85ea5b55c2cd2ee66a",
  },
  {
    id: 3,
    name: "Food Restaurant",
    description:
      "Built Food Restaurant, a restaurant finder and ordering platform developed with React.js and styled using DaisyUI. FoodieHub allows users to browse nearby restaurants, view menus, and place orders. The intuitive interface and visually appealing design make the platform easy to navigate, providing a seamless dining experience for users.",
    img: foodresto,
    //max 6 tech stack
    tech: [
      "React.js",
      "Tailwind CSS",
      "Daisy UI",
      "Shimmer UI",
      "Lazy loading",
    ],
    source: "https://github.com/krishnapandey0192",
    demo: "https://food-restaurant-krishnapandey0206-gmailcoms-projects.vercel.app/",
  },
  {
    id: 4,
    name: "Discord UI",
    description:
      "Discord UI Clone is a web application meticulously crafted with React and Tailwind CSS to mirror the essence and functionality of the original Discord UI. It encompasses a faithful reproduction of Discord's home page, Nitro page, and Safety page. The application boasts full responsiveness and furthermore, every link seamlessly connects to the official Discord site.",
    img: discord,
    //max 6 tech stack
    tech: ["React.js", "Tailwind CSS", "Material UI"],
    source: "https://github.com/krishnapandey0192",
    demo: null,
  },
  {
    id: 5,
    name: "Meteoto Dashboard",
    description:
      "Developed the Meteoto Dashboard, a comprehensive vehicle service management platform built with React.js. Meteoto allows users to manage service requests, track vehicle maintenance, and view analytics. The dashboard provides a streamlined interface for service providers to oversee and optimize operations. Allows admins to manage customer profiles and track spare parts inventory, ensuring efficient service delivery.",
    img: meteoto,
    //max 6 tech stack
    tech: ["Node.js", "Express.js", "EJS", "MongoDB", "Passport.js"],
    source: "https://github.com/krishnapandey0192",
    demo: "https://meteoto.in/",
  },
  {
    id: 6,
    name: "Portfolio",
    description:
      "Developed a personal portfolio website using React.js with interactive animations powered by Framer Motion. The portfolio provides an engaging experience, highlighting my projects, skills, and contact information in a dynamic, visually appealing layout.Fully responsive layout that adapts seamlessly to different screen sizes, ensuring a great experience on mobile and desktop.",
    img: portfolio,
    //max 6 tech stack
    tech: ["React.js", "Tailwind CSS", "Material UI"],
    source: "https://github.com/krishnapandey0192",
    demo: null,
  },
  {
    id: 7,
    name: "Racing Motto Game",
    description:
      "Developed Racing Moto, an exciting and fast-paced racing game built with HTML, CSS, and JavaScript. The game allows players to control a car and navigate through keyboard, aiming to score as many points as possible while avoiding collisions. The project highlights my ability to create interactive, fun web-based games with vanilla JavaScript.",
    img: racing,
    //max 6 tech stack
    tech: ["HTML", "CSS", "JS"],
    source: "https://github.com/krishnapandey0192",
    demo: "https://krishnapandey0192.github.io/Racing-motto-game/",
  },
  {
    id: 8,
    name: "Usability Hub Clone",
    description:
      "In this project, I created a front-end replica of UsabilityHub using HTML, CSS, and JavaScript. My goal was to recreate the clean, modern, and user-focused design of UsabilityHub as closely as possible, paying attention to its layout, typography, and interactive elements. This project showcases my skills in accurately translating a complex, real-world interface design into a responsive, fully functional web layout.",
    img: usability,
    //max 6 tech stack
    tech: ["HTML", "CSS", "JS"],
    source: "https://github.com/krishnapandey0192",
    demo: "https://krishnapandey0192.github.io/usabilityhubclone/",
  },
];
