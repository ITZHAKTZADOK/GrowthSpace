import {v4 as uuidv4} from 'uuid'

export class Product {
  public id: string = uuidv4();
  public name: string;
  public description: string;
  public imagePath: string = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg';
  public price: number;
  constructor(name: string, desc: string, price: number) {
    this.name = name;
    this.description = desc;
    this.price=price;
  }
}
