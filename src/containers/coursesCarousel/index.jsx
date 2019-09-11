import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export const CoursesCarousel = () => {
  const handleOnDragStart = e => e.preventDefault();
  return (
    <AliceCarousel mouseDragEnabled >
      <img src="src\assets\Laptop.png" onDragStart={handleOnDragStart} alt='carousel-item' className="yours-custom-class" />
      <img src="src\assets\Laptop.png" onDragStart={handleOnDragStart} alt='carousel-item' className="yours-custom-class" />
      <img src="src\assets\Laptop.png" onDragStart={handleOnDragStart} alt='carousel-item' className="yours-custom-class" />
      <img src="src\assets\Laptop.png" onDragStart={handleOnDragStart} alt='carousel-item' className="yours-custom-class" />
      <img src="src\assets\Laptop.png" onDragStart={handleOnDragStart} alt='carousel-item' className="yours-custom-class" />
    </AliceCarousel>
  )
}
