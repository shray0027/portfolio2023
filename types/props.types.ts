import {
  ICarouselItem,
  Language as ILanguage,
} from '../interfaces/portfolio.interfaces';

export type TCarouselProps = {
  items: ICarouselItem[];
  slideDuration: number;
};

export type TProgressBarProps = {
  duration: number;
  isPaused: boolean;
};

export type TProjectCardProps = {
  name: string;
  languages: ILanguage[];
};
