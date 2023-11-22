import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  Chat,
  Quicky,
  Movies,
  jobit,
  tripguide,
  threejs,
  videoapp,
  NewYear,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Omar proved me wrong.",
    name: "Lee",
    designation: "CFO",
    company: "ALX",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  {
    testimonial:
      "After Omar joined out team and optimized our website, our traffic increased by 80%",
    name: "R Team",
    designation: "R ",
    company: "Team",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chat App",
    description:
      "Web-based platform that allows users to Chat,Send photos with a real-time messages and encrypted database with 'firebase' ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Auth",
        color: "black",
      },
    ],
    image: Chat,
    source_code_link: "https://github.com/OmarKing015/Chat-App",
    source_link:"https://prchat.vercel.app"
  },
  {
    name: "Quicky",
    description:
      "Web application that enables users to Order Food, Desert, Drinks form sevral places , with a cool drag&drop future to make it easy to put the item to cart , with  a cool real map , And a strong database with 'firebase'",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Quicky,
    source_code_link: "https://github.com/OmarKing015/",
    source_link:"https://Quicky-tau.vercel.app"
  },
  {
    name: "New Year",
    description:
      "A Simple animation with css and js for the new year",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "Css",
        color: "blue-text-gradient",
      },

      {
        name: "Html",
        color: "orange-text-gradient",
      },
    ],
    image: NewYear,
    source_code_link: "https://github.com/OmarKing015/New-Year",
    source_link:"https://new-year-sage.vercel.app"
  },
  {
    name: "Video Chat App",
    description:
      "A Video Chat app with realtime communication and share screen and more..",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "blue-text-gradient",
      },

      {
        name: "React",
        color: "orange-text-gradient",
      },
      {
        name:"vite",
        color:"pink-text-gradient"
      }
    ],
    image: videoapp,
    source_code_link: "https://github.com/OmarKing015/",
    source_link:"https://conf-omar.vercel.app/"
  },
];
  
export { services, technologies, experiences, testimonials, projects };
