import { useEffect, useState } from "react";
import "../css/navbar.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-brand">
          <a href="#">
            <img src="img/Tiven.png" alt="logo" />
          </a>
        </div>
        <div
          className={`navbar-links ${
            isMenuOpen
              ? "open animate__animated animate__fadeInLeft animate__faster"
              : ""
          }`}
        >
          <a href="#" className="navbarlink">
            Inicio
          </a>
          <a href="#about-us" className="navbarlink">
            Sobre nosotros
          </a>
          <a href="#schedules" className="navbarlink">
            Horarios
          </a>
          <a href="#supplements" className="navbarlink">
            Suplementos
          </a>
          <div className="contact">
            <a href="#" className="navbarlink">
              Contáctame
            </a>
          </div>
        </div>
        <div className="navbar-contact">
          <a href="#">Contáctame</a>
        </div>
        <div
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </>
  );
};
