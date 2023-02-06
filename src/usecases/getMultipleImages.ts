import { SlideImage } from '@/infrastructure/Interfaces';

export interface getMultipleImagesQuery {
  getTenImages(): Promise<SlideImage[]>;
}
