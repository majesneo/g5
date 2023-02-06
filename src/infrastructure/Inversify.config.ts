import { Container } from 'inversify';
import { Types } from '@/infrastructure/Types';
import { getMultipleImagesQuery } from '@/usecases/getMultipleImages';
import { Fetcher, FetcherI } from '@/infrastructure/Fetcher';
import { SliderPort } from '@/ports/Slider.port';
import { SliderAdapter } from '@/infrastructure/Slider.adapter';
import { SliderService } from '@/services/Slider.service';
import { Axios } from '@/infrastructure/Axios';
import { AbstractVueCookiesService } from '@/services/AbstractVueCookies.service';
import { ProductService } from '@/services/Product.service';
import { ProductAdapter } from '@/infrastructure/Product.adapter';
import { ProductPort } from '@/ports/Product.port';
import { GetProductsQuery } from '@/usecases/getProductsQuery';

const container = new Container();
container.bind<getMultipleImagesQuery>(Types.getMultipleImagesQuery).to(SliderService);
container.bind<SliderService>(Types.SliderService).to(SliderService);
container.bind<FetcherI>(Types.FetcherI).to(Fetcher);
container.bind<SliderPort>(Types.SliderPort).to(SliderAdapter);
container.bind<SliderAdapter>(Types.SliderAdapter).to(SliderAdapter);
container.bind<Axios>(Types.Axios).to(Axios);
container.bind<AbstractVueCookiesService>(Types.AbstractVueCookiesService).to(AbstractVueCookiesService);
container.bind<ProductService>(Types.ProductService).to(ProductService);
container.bind<GetProductsQuery>(Types.GetProductsQuery).to(ProductService);
container.bind<ProductAdapter>(Types.ProductAdapter).to(ProductAdapter);
container.bind<ProductPort>(Types.ProductPort).to(ProductAdapter);
export { container };