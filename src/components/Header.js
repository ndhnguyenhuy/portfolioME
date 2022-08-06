import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
const HeaderNav = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMobile, setMobile] = useState(false);
  const MobileBar = useRef();
  const ExitBar = useRef();
  const Mouse = useRef();

  useEffect(() => {
    const Scroll = () => {};
    window.addEventListener("scroll", Scroll);
    window.addEventListener("resize", () => {});

    return () => {
      window.removeEventListener("scroll", Scroll);
      window.removeEventListener("resize", () => {
        if (window.innerWidth <= 786) {
          setMobile(!isMobile);
        }
        if (window.innerWidth > 786) {
          setMobile(false);
        }
      });
    };
  }, [activeLink]);
  const handleShowBar = () => {
    const MbNavBar = MobileBar.current;
    MbNavBar.classList.toggle("show");
  };
  return (
    <div>
      <div>
        <button className="navbar-mobile">
          <FaBars className="icon-bar" onClick={handleShowBar} />
        </button>
        <div className="mobile-navbar" ref={MobileBar}>
          <button
            className="navbar-mobile"
            ref={ExitBar}
            onClick={handleShowBar}
          >
            <MdExitToApp className="icon-exit" />
          </button>
          <ul className="mobile-list">
            <a href="#home">
              <li className="mobile-list-item">Home</li>
            </a>
            <a href="#About">
              <li className="mobile-list-item">About</li>
            </a>
            <a href="#Skills">
              <li className="mobile-list-item">Skills</li>
            </a>
            <a href="#Project">
              <li className="mobile-list-item">Project</li>
            </a>
            <a href="#Contact">
              <li className="mobile-list-item">Contact</li>
            </a>
          </ul>
        </div>
      </div>
      <ul className="nav justify-content-end list-pc">
        <li className="nav-item">
          <a
            className={
              activeLink === "home"
                ? "nav-link fs-5 mx-2  item-nav active"
                : "nav-link fs-5 mx-2  item-nav"
            }
            onClick={() => setActiveLink("home")}
            href="#home"
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className={
              activeLink === "about"
                ? "nav-link fs-5 mx-2  item-nav active"
                : "nav-link fs-5 mx-2  item-nav"
            }
            onClick={() => setActiveLink("about")}
            href="#About"
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            className={
              activeLink === "skills"
                ? "nav-link fs-5 mx-2  item-nav active"
                : "nav-link fs-5 mx-2  item-nav"
            }
            onClick={() => setActiveLink("skills")}
            href="#Skills"
          >
            SKills
          </a>
        </li>
        <li className="nav-item">
          <a
            className={
              activeLink === "project"
                ? "nav-link fs-5 mx-2  item-nav active"
                : "nav-link fs-5 mx-2  item-nav"
            }
            onClick={() => setActiveLink("project")}
            href="#Project"
          >
            Project
          </a>
        </li>
        <li className="nav-item">
          <a
            className={
              activeLink === "contact"
                ? "nav-link fs-5 mx-2  item-nav active"
                : "nav-link fs-5 mx-2  item-nav"
            }
            onClick={() => setActiveLink("contact")}
            href="#Contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

const HeaderBrand = () => {
  return (
    <div>
      <h1 className="brand">HDEV</h1>
    </div>
  );
};
function Header() {
  return (
    <div className="header pt-4 fixed-top">
      <HeaderBrand />
      <HeaderNav />
    </div>
  );
}
export default Header;
