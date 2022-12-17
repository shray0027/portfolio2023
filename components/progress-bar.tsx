import { useEffect, useState } from 'react';
import { TProgressBarProps } from '../types/props.types';

const ProgressBar: React.FC<TProgressBarProps> = ({ duration, isPaused }) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let timer: number | undefined = undefined;
    if (!isPaused) {
      timer = window.setInterval(() => {
        setProgress((1 + progress) % 100);
      }, duration / 100);
    } else {
      window.clearInterval(timer);
    }
    return () => window.clearInterval(timer);
  }, [progress, duration, isPaused]);

  return (
    <div
      id="carousel-progress-bar"
      className="absolute z-10 h-2 w-full bg-darkBackground bottom-0 "
    >
      <div
        id="progress"
        className="h-full bg-darkPrimary"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
