import { inject, injectable } from 'inversify';

import { SliderPort } from '@/ports/Slider.port';

import { FetcherI } from '@/infrastructure/Fetcher';
import { Types } from '@/infrastructure/Types';
import { SlideImage } from '@/infrastructure/Interfaces';

@injectable()
export class SliderAdapter implements SliderPort {
  public constructor(
    @inject(Types.FetcherI)
    public Fetcher: FetcherI,
  ) {}

  async getMultipleImages(url: string, quantity: number): Promise<SlideImage[]> {
    return await this.Fetcher.getMultipleRequests(url, quantity);
  }
}
