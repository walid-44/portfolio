import Logo from "../logo/Logo";
import { dataNav } from "./Links";
import { FiAlignJustify } from "react-icons/fi";
import { CiDark } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import "./navbar.css";
import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [iconTheme, setIconTheme] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  // console.log(activeSection);
  const toggleMenu = () => {
    setOpen(!open);
  };
  const DarkMode = () => {
    document.querySelector("body").classList.toggle("dark-theme");
    setIconTheme(!iconTheme);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const beScrolled = scrollTop > 0;
      setIsScroll(beScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2}
    );
    document.querySelectorAll("section").forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => sectionObserver.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setOpen(!open);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky-top ">
      <div
        className={`container header-cont d-flex justify-content-between py-3 ${
          isScroll ? "nav-scroll " : ""
        }`}
      >
        <Logo />
        <nav className="d-flex justify-content-between align-items-center">
          <ul className={`list-link p-0 m-0  ms-auto ${open ? "open" : ""}`}>
            <li className="close-icon m-2 p-1" onClick={toggleMenu}>
              <IoCloseSharp />
            </li>
            {dataNav.map((link) => (
              <li key={link.title}>
                <a
                  className={`link-name ${
                    activeSection === link.title ? "active" : null
                  }`}
                  href={`#${link.title}`}
                  onClick={() => handleNavClick(link.title)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="d-flex align-items-center p-0 m-0 ">
          <li className="d-flex d-md-none icon-nav" onClick={toggleMenu}>
            <FiAlignJustify />
          </li>
          <li className=" icon-nav ms-2" onClick={DarkMode}>
            {iconTheme ? (
              <CiDark />
            ) : (
              <span>
                <FaSun className="icon-light" />
              </span>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
