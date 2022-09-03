import {v4 as uuidv4} from 'uuid'

export class Product {
  public id: string | undefined = uuidv4();
  public name: string;
  public description: string;
  public price: number;
  constructor(name: string, desc: string, price: number) {
    this.name = name;
    this.description = desc;
    this.price=price;
  }
}
