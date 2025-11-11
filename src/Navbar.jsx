import MyImage from "../assets/mypicture.jpg";

import styles from "./styles.module.css";
import { IoMenuSharp } from "react-icons/io5";
export default function Navbar({ setShowResponsiveNavbar }) {
  return (
    <nav
      className={`${styles.navBar} fixed left-0 right-0 top-0 z-50 sm:m-4 sm:w-screen sm:m-0 sm:p-8 lg:p-10 lg:m-0 xl:pt-10 xl:pl-40 xl:pr-40 mr:pt-8 mr:pb-8 mr:pl-4 mr:pr-4`}
    >
      <a href=""></a>
      <div className="flex items-center justify-between">
        <a href="#home">
          <div
            style={{ cursor: "pointer" }}
            className={`${styles.backgroundGlass} ${styles.navLogo} sm:p-2 flex items-center p-2 gap-x-8 sm:gap-x-2  lg:bg-mybgColor lg:shadow-customboxShadow lg:border-customBorderColor lg:rounded-customBorderRadius lg:p-2 mr:gap-x-2`}
          >
            <img
              className={`${styles.myImg} rounded-full object-cover w-8 `}
              src={MyImage}
              alt=""
            />
            <h1 className={` font-bold `}>JsH</h1>
          </div>
        </a>

        <div
          className={`${styles.backgroundGlass} flex items-center p-2 gap-x-8 sm:hidden lg:flex mr:hidden`}
        >
          <ul className="flex">
            <li className="pl-4 pr-4">
              <a className={`${styles.navLink}`} href="#about">
                ABOUT
              </a>
            </li>
            <li className="pl-4 pr-4">
              <a className={`${styles.navLink}`} href="#service">
                SERVICES
              </a>
            </li>
            <li className="pl-4 pr-4">
              <a className={`${styles.navLink}`} href="#portfolio">
                PORTFOLIO
              </a>
            </li>
          </ul>
        </div>
        <div className={`${styles.btnBg} p-2 sm:hidden lg:flex mr:hidden`}>
          <a
            href="https://drive.google.com/file/d/1c0UgYKIh-fz6DSg_IzS-aLwiimaaUi1t/view"
            target="_blank"
          >
            RESUME
          </a>
        </div>

        <div
          onClick={() => setShowResponsiveNavbar(true)}
          className={`mr:block sm:block md:block lg:hidden xl:hidden 2xl:hidden`}
        >
          <button className={`${styles.btnBg} p-2`}>
            <IoMenuSharp className="sm:text-2xl" />
          </button>
        </div>
      </div>
    </nav>
  );
}
