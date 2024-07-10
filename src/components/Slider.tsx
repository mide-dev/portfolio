import { useEffect, useRef, useState } from "react";

const delay = 2500;

function Slideshow({ images }: any) {
  const [index, setIndex] = useState(0);
  const timeoutRef: React.MutableRefObject<ReturnType<
    typeof setTimeout
  > | null> = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((img: string, index: number) => (
          <div className="slide" key={index}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_: any, idx: number) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
