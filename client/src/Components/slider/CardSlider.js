import React, { useRef, useState } from 'react'
import Card from './Card'
import "./cardSlider.css";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
export default React.memo(
  function CardSlider({ data, title }) {
    const [showControls, setShowControls] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(0);
    const listRef = useRef();
    const handleDirection = (direction) => {
      const distance = listRef.current.getBoundingClientRect().x - 40;
      if (direction === "left" && sliderPosition > 0) {
        listRef.current.style.transform = `translateX(${230 + distance}px)`;
        setSliderPosition(sliderPosition - 1);
      }
      if (direction === "right" && sliderPosition < 4) {
        listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        setSliderPosition(sliderPosition + 1);
      }
    };


    return (
      <div className="flex-container card-slider-container column" onMouseEnter={() => { setShowControls(true) }} onMouseLeave={() => { setShowControls(false) }}>
        <h1>{title}</h1>
        <div className="wrapper">
          <div className={`slider-action left ${!showControls ? "none" : ""} flex j-center a-center`}>
            <AiOutlineLeft onClick={() => { handleDirection("left") }} />
          </div>
          <div className='flex slider' ref={listRef}>
            {
              data.map((movie, index) => {
                return <Card movieData={movie} index={index} key={index} />
              })
            }
          </div>
          <div className={`slider-action right ${!showControls ? "none" : ""} flex j-center a-center`}>
            <AiOutlineRight onClick={() => { handleDirection("right") }} />
          </div>
        </div>
      </div>
    )
  }
);
