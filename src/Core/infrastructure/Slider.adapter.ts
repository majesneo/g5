import { inject, injectable } from 'inversify';

import { SliderPort } from '@/Core/ports/Slider.port';

import { FetcherI } from '@/Core/infrastructure/Fetcher';
import { Types } from '@/Core/infrastructure/Types';
import { SlideImage } from '@/Core/infrastructure/Interfaces';

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
