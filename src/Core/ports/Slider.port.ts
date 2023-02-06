import { SlideImage } from '@/Core/infrastructure/Interfaces';

export interface SliderPort {
  getMultipleImages(url: string, quantity: number): Promise<SlideImage[]>;
}
