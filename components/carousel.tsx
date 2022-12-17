import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { TCarouselProps } from '../types/props.types';
import ProgressBar from './progress-bar';

const Carousel: React.FC<TCarouselProps> = ({ items, slideDuration }) => {
  const [isCarouselPaused, setIsCarouselPaused] = useState<boolean>(false);
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    setCurrentItemIndex(currentItemIndex - 1);
    setIsCarouselPaused(true);
  };

  const handleNext = () => {
    setCurrentItemIndex(currentItemIndex + 1);
    setIsCarouselPaused(true);
  };

  useEffect(() => {
    let carouselInterval: number | undefined = undefined;
    if (!isCarouselPaused) {
      carouselInterval = window.setInterval(() => {
        setCurrentItemIndex((currentItemIndex + 1) % items.length);
      }, slideDuration);
    } else {
      window.clearInterval(carouselInterval);
    }
    return () => {
      window.clearInterval(carouselInterval);
    };
  }, [isCarouselPaused, currentItemIndex, slideDuration, items.length]);

  return (
    <div
      id="carousel-container"
      ref={carouselRef}
      className=" w-56 h-56  rounded-[20px] relative"
      onMouseEnter={() => setIsCarouselPaused(true)}
      onMouseLeave={() => setIsCarouselPaused(false)}
    >
      {currentItemIndex > 0 && (
        <button
          id="carousel-left-control"
          className="
          h-10 
          w-10 
          absolute 
          left-5 
           top-1/2
           -translate-y-1/2
          z-10 
          hover:bg-darkBackground
           bg-opacity-25
           rounded-full"
          onClick={handlePrevious}
        >
          <ArrowBackIos />
        </button>
      )}
      {currentItemIndex < items.length - 1 && (
        <button
          id="carousel-right-control"
          className="
          h-10 
          w-10 
          absolute right-5 z-10 flex items-center justify-center top-1/2
          -translate-y-1/2"
          onClick={handleNext}
        >
          <ArrowForwardIos />
        </button>
      )}
      <Image
        className="absolute z-0"
        fill={true}
        alt=""
        src={items[currentItemIndex].imageUrl}
      />
      <ProgressBar duration={slideDuration} isPaused={isCarouselPaused} />
    </div>
  );
};

export default Carousel;
