import { SlideImage } from '@/Core/infrastructure/Interfaces';

export interface getMultipleImagesQuery {
  getTenImagesQuery(): Promise<SlideImage[]>;
}
