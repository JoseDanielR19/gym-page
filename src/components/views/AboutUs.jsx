import { useEffect, useRef } from "react";
import "../../css/about-us.css";

export const AboutUs = () => {
  const imagesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutUsSection = document.getElementById("about-us");
      const rect = aboutUsSection.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (
        rect.top <= windowHeight * 0.75 &&
        rect.bottom >= windowHeight * 0.25
      ) {
        imagesRef.current.classList.add("fade-in");
        imagesRef.current.classList.remove("fade-out");
      } else {
        imagesRef.current.classList.add("fade-out");
        imagesRef.current.classList.remove("fade-in");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="background" id="about-us">
        <div className="container-about">
          <div className="title">
            <h1>Stevens Rivas</h1>
          </div>
          <div className="description">
            <p>Entrenador deportivo</p>
          </div>
          <div className="images" ref={imagesRef}>
            <img src="src/assets/img/IMG_20240719_134756.jpg" alt="img" />
            <img src="src/assets/img/PSX_20240719_135448.jpg" alt="img" />
            <img src="src/assets/img/IMG_20240719_134719.jpg" alt="img" />
            <img src="src/assets/img/IMG_20240719_134953.jpg" alt="img" />
          </div>
        </div>
        <div className="cap-about"></div>
      </div>
    </>
  );
};
