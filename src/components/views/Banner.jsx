/* eslint-disable react/no-unknown-property */
import "../../css/banner.css";
import { useState, useEffect } from "react";
import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Bodybuilder } from "../Bodybuilder";

export const Banner = () => {
  const [rotationX, setRotationX] = useState(0);
  const [position, setPosition] = useState(0);
  const [isAbsolute, setIsAbsolute] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const screenWidth = window.innerWidth;

      // Handle rotationX based on screen width
      const rotationFactors = {
        375: 106,
        390: 135,
        412: 145,
        414: 143,
        430: 147,
        540: 114,
      };

      setRotationX(scrollY / (rotationFactors[screenWidth] || 116));

      // Handle position based on scrollY and screenWidth
      if (screenWidth > 800) {
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
      }

      // Handle isAbsolute based on scrollY and screenWidth
      if (scrollY > 2192.800048828125) {
        setIsAbsolute(true);
        setRotationX(0);
      } else {
        setIsAbsolute(false);
      }

      if (scrollY <= 2224) {
        setIsAbsolute(false);
      }

      const screenConditions = [
        { width: 375, minScroll: 2006, maxScroll: 2006 },
        { width: 414, minScroll: 2192, maxScroll: 2692 },
        { width: 390, minScroll: 2196, maxScroll: 2536 },
        { width: 430, minScroll: 2100, maxScroll: 2800 },
        { width: 412, minScroll: 2184, maxScroll: 2750 },
      ];

      screenConditions.forEach(({ width, minScroll, maxScroll }) => {
        if (screenWidth === width) {
          if (scrollY >= minScroll) {
            setIsAbsolute(false);
            setRotationX(scrollY / (rotationFactors[width] || 116));
          }
          if (maxScroll && scrollY > maxScroll) {
            setIsAbsolute(true);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className={`bodybuilder ${isAbsolute ? "absolute" : "fixed"}`}
        style={{ left: position }}
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
