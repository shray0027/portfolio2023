import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TCarouselProps } from '../types/props.types';

const Carousel: React.FC<TCarouselProps> = ({ items }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState<boolean>(false);

  const showItem = (delta: number) => {
    const newIndex = Math.abs((currentItemIndex + delta) % items.length);
    setCurrentItemIndex(newIndex);
  };

  const pauseCarousel = () => {
    setIsCarouselPaused(true);
  };

  const resumeCarousel = () => {
    setIsCarouselPaused(false);
  };

  useEffect(() => {
    console.log(items);

    const carouselInterval = setInterval(() => {
      if (!isCarouselPaused) showItem(1);
    }, 2000);

    return () => clearInterval(carouselInterval);
  }, [isCarouselPaused]);

  return (
    <div
      id="carousel-container"
      className=" w-56 h-56  rounded-[20px] relative"
      onMouseEnter={pauseCarousel}
      onMouseLeave={resumeCarousel}
    >
      <div
        id="carousel-left-control"
        className="h-full w-20 absolute left-0 z-10"
        onClick={() => showItem(1)}
        hidden={currentItemIndex === 0}
      >
        helo
      </div>
      <div
        id="carousel-right-control"
        className="h-full w-20 absolute right-0 z-10"
        onClick={() => showItem(-1)}
        hidden={currentItemIndex === items.length - 1}
      >
        hr
      </div>
      <Image
        className="absolute z-0"
        fill={true}
        alt=""
        src={items[currentItemIndex].imageUrl}
      />
    </div>
  );
};

export default Carousel;
