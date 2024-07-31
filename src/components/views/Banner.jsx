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
      setRotationX(scrollY / 116);

      if (scrollY > 0 && scrollY <= 729) {
        setPosition(-scrollY / 2);
      } else if (scrollY > 729 && scrollY <= 1459.199951171875) {
        const progress = (scrollY - 729) / (1459.199951171875 - 729);
        const newPosition = -364.4 + progress * 730;
        setPosition(newPosition);
      } else if (scrollY > 1459.199951171875) {
        const progress =
          (scrollY - 1459.199951171875) /
          (2188.800048828125 - 1459.199951171875);
        const newPosition = 364.4 - progress * 730;
        setPosition(newPosition);
      }

      if (scrollY > 2192.800048828125) {
        setIsAbsolute(true);
        setRotationX(0);
      } else {
        setIsAbsolute(false);
      }
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
