import { useState, useEffect } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import "./Baner.css";

type SliderProps = {
  slideUrl: string[];
};

export function Baner({ slideUrl }: SliderProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  function showNextSlide() {
    setSlideIndex((index) => {
      if (index === slideUrl.length - 1) return 0;
      else return index + 1;
    });
  }

  function showPrevSlide() {
    setSlideIndex((index) => {
      if (index === 0) return slideUrl.length - 1;
      else return index - 1;
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      showNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {slideUrl.map((url) => (
          <img
            key={url}
            src={url}
            className="img-slider-img"
            style={{
              transform: `translateX(${-100 * slideIndex}%)`,
              transition: "transform 300ms ease-in-out",
            }}
          />
        ))}
      </div>
      <button
        onClick={showPrevSlide}
        className="img-slider-btn"
        style={{ left: "0" }}
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={showNextSlide}
        className="img-slider-btn"
        style={{ right: "0" }}
      >
        <ArrowBigRight />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {slideUrl.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            onClick={() => {
              setSlideIndex(index);
            }}
          >
            {" "}
            {index === slideIndex ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
  );
}
