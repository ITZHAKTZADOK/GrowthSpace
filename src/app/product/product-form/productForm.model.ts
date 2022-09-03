
export class ProductForm {
  public name: string;
  public description: string;
  public price: number;
  constructor(name: string, desc: string, price: number) {
    this.name = name;
    this.description = desc;
    this.price=price;
  }
}
