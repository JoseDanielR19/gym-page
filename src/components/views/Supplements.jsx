import { useState } from "react";
import "../../css/supplements.css";
import { supplements } from "../../data/fakeDbSupplements";

export const Supplements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenWidth = window.innerWidth;
  let itemsToShow = 3;

  if (screenWidth <= 1060) {
    itemsToShow = 2;
  }
  if (screenWidth <= 768) {
    itemsToShow = 1;
  }

  const nextSet = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % supplements.length);
  };

  const prevSet = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? supplements.length - 1 : prevIndex - 1
    );
  };

  // Create a function to get the current set of items to display
  const getCurrentItems = () => {
    let items = [];
    for (let i = 0; i < itemsToShow; i++) {
      let index = (currentIndex + i) % supplements.length;
      items.push(supplements[index]);
    }
    return items;
  };

  return (
    <>
      <div className="cap-supplements">
        <div className="title-supplements">
          <h1>Venta y asesoría de suplementos</h1>
        </div>
        <div className="carousel-container">
          <button className="left-arrow" onClick={prevSet}>
            <img src="src\assets\arrow-left.svg" alt="arrow-left" />
          </button>
          <div className="carousel">
            {getCurrentItems().map((supplement) => (
              <div key={supplement.id} className="supplement-card">
                <img src={supplement.imgUrl} alt={supplement.name} />
                <h3>{supplement.name}</h3>
                <p>$ {supplement.price}</p>
                <a href="#">
                  <img src="src/assets/whatsapp.svg" alt="whatsapp" />
                  Comprar
                </a>
              </div>
            ))}
          </div>
          <button className="right-arrow" onClick={nextSet}>
            <img src="src\assets\arrow-right.svg" alt="arrow-right" />
          </button>
        </div>
      </div>
      <div className="background-supplements" id="supplements">
        <div className="img-container">
          <img src="src/assets/img/IMG_20240719_134953.png" alt="img" />
        </div>
      </div>
    </>
  );
};
