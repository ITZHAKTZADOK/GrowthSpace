import {Product} from "./product.model";
import {Subject} from "rxjs";
import {ProductForm} from "./product-form/productForm.model";


export class ProductService {
  selectedProduct = new Subject<Product>();
  updatedProducts = new Subject<Product[]>();
  filteredValue = new Subject<string>();
  editMode = new Subject<boolean>();
  loading = new Subject<boolean>();
  private products: Product[]  = JSON.parse(localStorage.getItem('products') || '[]')

  constructor() { }

  async getProducts() : Promise<Product[]>{
    return new Promise((resolve)=> {
      setTimeout(()=> resolve(this.products.slice()), 1000)
    });
  }

  addProduct(product: ProductForm){
    this.products.push(new Product(product.name, product.description, product.price));
    this.updatedProducts.next(this.products.slice())
    localStorage.setItem('products', JSON.stringify(this.products))
  }

  updateProduct(updatedProduct: ProductForm, productId: string){
    let productIndex = this.products.findIndex((product: Product)=> product.id===productId)
    this.products[productIndex].name = updatedProduct.name
    this.products[productIndex].name = updatedProduct.name
    this.products[productIndex].description = updatedProduct.description
    this.products[productIndex].price = updatedProduct.price
    this.updatedProducts.next(this.products.slice())
  }

  deleteProduct(id:string){
    let index = this.products.findIndex((product:Product)=> product.id === id)
    this.products.splice(index,1)
    this.updatedProducts.next(this.products.slice())
    localStorage.setItem('products', JSON.stringify(this.products))
  }
  setFilterString(filterString: string){
    this.filteredValue.next(filterString)
  }

  setEditMode(editMode:boolean){
    this.editMode.next(editMode)
  }
}
