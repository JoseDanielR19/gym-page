/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import "../../css/banner.css";
import { useState, useEffect } from "react";
import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Bodybuilder } from "../Bodybuilder";

export const Banner = () => {
  const [rotationX, setRotationX] = useState(0);
  const [position, setPosition] = useState(0);
  const [isFixed, setIsFixed] = useState(true);
  const [absoluteTop, setAbsoluteTop] = useState(2193); // Valor por defecto

  const screenConditions = [
    { width: 375, minScroll: 2006, maxScroll: 2006 },
    { width: 414, minScroll: 2192, maxScroll: 2692 },
    { width: 390, minScroll: 2196, maxScroll: 2536 },
    { width: 430, minScroll: 2100, maxScroll: 2800 },
    { width: 412, minScroll: 2184, maxScroll: 2750 },
    { width: 360, minScroll: 2000, maxScroll: 2224 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const screenWidth = window.innerWidth;

      // Maneja la rotaciónX según el ancho de la pantalla
      const rotationFactors = {
        375: 106,
        390: 135,
        412: 145,
        414: 143,
        430: 147,
        540: 114,
      };

      if (scrollY <= absoluteTop) {
        setRotationX(scrollY / (rotationFactors[screenWidth] || 116));
      }

      // Manejar la posición basada en scrollY y screenWidth
      if (screenWidth > 800) {
        if (scrollY <= absoluteTop) {
          if (scrollY > 0 && scrollY <= 729) {
            setPosition(-scrollY / 2);
          } else if (scrollY > 729 && scrollY <= 1459.199951171875) {
            const progress = (scrollY - 729) / (1459.199951171875 - 729);
            setPosition(-364.4 + progress * 730);
          } else if (scrollY > 1459.199951171875) {
            const progress =
              (scrollY - 1459.199951171875) /
              (2188.800048828125 - 1459.199951171875);
            setPosition(364.4 - progress * 730);
          }
        } else {
          // Corrige la posición y la rotación cuando scrollY excede el fijoScrollY
          setPosition(
            364.4 -
              ((absoluteTop - 1459.199951171875) /
                (2188.800048828125 - 1459.199951171875)) *
                730
          );
          setRotationX(absoluteTop / (rotationFactors[screenWidth] || 116));
        }
      }

      // El identificador es fijo según scrollY y screenWidth
      if (scrollY > absoluteTop) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }

      screenConditions.forEach(({ width, maxScroll }) => {
        if (screenWidth === width) {
          setAbsoluteTop(maxScroll); // Establece la posición absoluta según el ancho de la pantalla
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [absoluteTop]);

  return (
    <>
      <div className="cap">
        <div className="text-intro">
          <h1>Lleva tu rendimiento al siguiente nivel con Tivenfit</h1>
        </div>
        <div className="img-intro">
          <img src="src/assets/img/Tiven.png" alt="Logo" />
        </div>
      </div>
      <div
        className={`bodybuilder ${isFixed ? "fixed" : "absolute"}`}
        style={{ left: position, top: isFixed ? "auto" : absoluteTop }}
      >
        <Canvas camera={{ zoom: 1 }}>
          <directionalLight position={[100, 100, 0]} />
          <Suspense fallback={null}>
            <Bodybuilder rotation={[0, rotationX, 0]} />
          </Suspense>
        </Canvas>
      </div>
      <div className="banner"></div>
    </>
  );
};
