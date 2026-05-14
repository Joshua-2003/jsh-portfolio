import jshportfolioImg from "../assets/jshportfolio.jpg";
import shoeShopProject from "../assets/shoeShopProject.png";
import projectThumbnail1 from "../assets/projectThumbnail1.jpg";
import starBucksImg from "../assets/StarBucksImg.jpg";
import wordPressTemplateImg from "../assets/WordPressTemplateImg.jpg";
import carRental from "../assets/carRental.png";
import quotationImg from "../assets/quotation.jpg";
import msu from "../assets/msu.png";
import reactjs from "../assets/science.png";
import tailwind from "../assets/Tailwind CSS.png";
import html from "../assets/HTML5.png";
import css from "../assets/css-3.png";
import js from "../assets/js-file.png";
import bootstrap from "../assets/Bootstrap.png";
import redux from "../assets/redux.png";
import nodejs from "../assets/nodejs.png";  
import typescript from "../assets/typescript.png";
import express from "../assets/Express.png";
import postgresql from "../assets/elephant.png"

import citportalimg from "../assets/citportal.png";

import laravel from "../assets/Laravel.png"
import database from "../assets/database.png"
import vue from "../assets/Vuejs.png"


export const projects = [
  {
    id: 1,
    img: msu,
    projectName: "MSU - Marawi Library System",
    details:
      "MSU-Marawi Library Kiosk is a client-based library management kiosk system integrated with the Koha server, designed to streamline patron registration, self-checkout, book reservations, and transaction tracking through QR/barcode scanning and real-time database synchronization. Built with secure user dashboards, automated receipts, and open-shelf/closed-shelf borrowing support for an efficient library experience.",
    useTechnology: [
      {
        tech1: reactjs,
        tech2: nodejs,
        tech3: typescript,
        tech4: express,
        tech5: postgresql,
      },
    ],
    urlRepo: "",
    urlWebsite: "",
  },
  {
    id: 2,
    img: quotationImg,
    projectName: "Quotation System",
    details:
      "Construction Quotation System is a web-based project quotation management platform designed to streamline the construction quotation process between clients, estimators, managers, and administrators. The system allows clients to submit quotation requests, managers to assign estimators, and estimators to generate detailed quotations based on client-provided project information. It also includes an admin panel for user management, monitoring transactions, and overall system administration to ensure efficient workflow and coordination.",
    useTechnology: [
      {
        tech1: reactjs,
        tech2: nodejs,
        tech3: typescript,
        tech4: express,
      },
    ],
    urlRepo: "https://github.com/Joshua-2003/QUOTATION_SYSTEM.git",
    urlWebsite: "https://drive.google.com/drive/folders/1z_8bDcBVeHllId39P1B6jeWDdhXo0PT_?usp=sharing",
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
];
