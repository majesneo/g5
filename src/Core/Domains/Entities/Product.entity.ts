export class ProductEntity {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public price: number,
    public discountPercentage: number,
    public rating: number,
    public stock: number,
    public brand: string,
    public category: string,
    public thumbnail: string,
    public images: string[],
    public interval: number,
    public timer: number,
  ) {}
}
