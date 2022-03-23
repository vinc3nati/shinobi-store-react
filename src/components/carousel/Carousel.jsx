import React, { Children, cloneElement, useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

export const CarouselItem = ({ children, active, index }) => (
  <div
    className="carousel-item"
    style={active === index ? { display: "flex" } : { display: "none" }}
  >
    {children}
  </div>
);

export const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = Children.count(children) - 1;
    } else if (newIndex >= Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          active: `${activeIndex}`,
          index: `${index}`,
        });
      })}
      <div className="indicators">
        <button
          className="btn tertiary"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button
          className="btn tertiary"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};
