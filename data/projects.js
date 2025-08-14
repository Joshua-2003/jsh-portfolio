import jshportfolioImg from "../assets/jshportfolio.jpg";
import shoeShopProject from "../assets/shoeShopProject.jpg";
import projectThumbnail1 from "../assets/projectThumbnail1.jpg";
import starBucksImg from "../assets/StarBucksImg.jpg";
import wordPressTemplateImg from "../assets/WordPressTemplateImg.jpg";
import carRental from "../assets/carRental.jpg";
import reactjs from "../assets/science.png";
import tailwind from "../assets/Tailwind CSS.png";
import html from "../assets/HTML5.png";
import css from "../assets/css-3.png";
import js from "../assets/js-file.png";
import bootstrap from "../assets/Bootstrap.png";
import redux from "../assets/redux.png";

import citportalimg from "../assets/citportal.png";

import laravel from "../assets/Laravel.png"
import database from "../assets/database.png"
import vue from "../assets/Vuejs.png"


export const projects = [
  {
    id: 1,
    img: citportalimg,
    projectName: "CIT Portal",
    details:
      "CIT Portal is a web-based academic management system designed to streamline tasks for students, teachers, and admins—such as posting announcements, managing grades, and viewing class schedules. Built with Laravel and Vue.js for efficiency and user-friendly experience.",
    useTechnology: [
      {
        tech1: laravel,
        tech2: database,
        tech3: vue,
      },
    ],
    urlRepo: "https://github.com/Praydchicken/CITportal.git",
    urlWebsite: "https://citportal.site/login",
  },

  {
    id: 2,
    img: carRental,
    projectName: "Car Rental",
    details:
      "This site is a project where I practice my skills in React and Redux. You can browse cars, filter them by different options. It's a simple demonstration of what I can do with front end development.",
    useTechnology: [
      {
        tech1: reactjs,
        tech2: redux,
        tech3: tailwind,
      },
    ],
    urlRepo: "https://github.com/Yussha/car-rental",
    urlWebsite: "https://joshua-2003.github.io/car-rental/",
  },

  {
    id: 3,
    img: jshportfolioImg,
    projectName: "Official Jsh Portfolio",
    details:
      "My portfolio, built with React.js, features my projects and skills in a sleek design. I practiced Tailwind CSS for rapid styling, ensuring a modern and responsive layout. This portfolio demonstrates my proficiency in React.js and Tailwind CSS.",
    useTechnology: [
      {
        tech1: reactjs,
        tech2: tailwind,
      },
    ],
    urlRepo: "https://github.com/Yussha/jsh-portfolio",
  },
  {
    id: 4,
    img: shoeShopProject,
    projectName: "E-Commerce Shoe Store",
    details:
      "This project is an e-commerce web application for selling shoes. Built with React.js and styled using Tailwind CSS, it offers a modern, responsive, and user-friendly interface. The app uses React hooks like useContext, useRef, useEffect, and useState to manage state and interactions efficiently",
    useTechnology: [
      {
        tech1: reactjs,
        tech2: tailwind,
      },
    ],
    urlRepo: "https://github.com/Yussha/e-commerce",
    urlWebsite: "https://joshua-2003.github.io/e-commerce/",

  },

  {
    id: 5,
    img: projectThumbnail1,
    projectName: "Project Portfolio",
    details:
      "This school assignment showcases my work using HTML, CSS, JavaScript, and Bootstrap. It features responsive design and interactive elements, with Bootstrap providing a clean, professional layout. This project highlights my front-end development skills.",
    useTechnology: [
      {
        tech1: html,
        tech2: css,
        tech3: js,
        tech4: bootstrap,
      },
    ],

    urlRepo: "https://jshpersonalportfolio.netlify.app/",
    urlWebsite: "https://jshpersonalportfolio.netlify.app/",

  },

  {
    id: 6,
    img: starBucksImg,
    projectName: "Starbucks Website Front-End Challenge",
    details:
      "This project involves creating a Starbucks website clone to practice my HTML, CSS, and JavaScript skills. The challenge focuses on developing a responsive, visually appealing site with interactive features, simulating a real-world web development scenario. This project highlights my proficiency in front-end technologies and my ability to build user-friendly web applications.",
    useTechnology: [
      {
        tech1: html,
        tech2: css,
        tech3: js,
      },
    ],
    urlRepo: "https://github.com/Yussha/StarBucksChallenge",
    urlWebsite: " https://joshua-2003.github.io/StarBucksChallenge/",
  },

  {
    id: 7,
    img: wordPressTemplateImg,
    projectName: "WordPress Template Conversion Project",
    details:
      "This project involved converting a WordPress template into HTML and CSS code to practice my front-end development skills. The exercise focused on replicating the design and layout of the template, enhancing my understanding of HTML structure and CSS styling. This project demonstrates my ability to translate design templates into responsive web pages.",
    useTechnology: [
      {
        tech1: html,
        tech2: css,
      },
    ],
    urlRepo: "https://github.com/Yussha/PracticeLandingPage",
    urlWebsite: "https://joshua-2003.github.io/PracticeLandingPage/",
  },
];
