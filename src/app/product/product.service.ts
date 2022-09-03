import {Product} from "./product.model";
import {Subject} from "rxjs";


export class ProductService {
  selectedProduct = new Subject<Product>();
  updatedProducts = new Subject<Product[]>();
  filteredValue = new Subject<string>();
  editMode = new Subject<boolean>();
  loading = new Subject<boolean>();
  private products: Product[];

  constructor() {
    this.initProduct()
  }
  initProduct(){
    try{
      this.products = JSON.parse(localStorage.getItem('products') || '[]')
    }catch(e){
      this.products = [];
    }
  }
  async getProducts() : Promise<Product[]>{
    return new Promise((resolve)=> {
      setTimeout(()=> resolve(this.products.slice()), 1000)
    });
  }

  addProduct(product: Product){
    this.products.push(product);
    this.updatedProducts.next(this.products.slice())
    localStorage.setItem('products', JSON.stringify(this.products))
  }

  updateProduct(updatedProduct: Product){
    const productIndex = this.products.findIndex((product: Product)=> product.id===updatedProduct.id)
    if(productIndex!==-1) {
      this.products[productIndex] = updatedProduct;
      this.updatedProducts.next(this.products.slice())
      localStorage.setItem('products', JSON.stringify(this.products))
    }
  }

  deleteProduct(id:string | undefined){
    const index = this.products.findIndex((product:Product)=> product.id === id)
    if(index!==-1){
      this.products.splice(index,1)
      this.updatedProducts.next(this.products.slice())
      localStorage.setItem('products', JSON.stringify(this.products))
    }

  }
  setFilterString(filterString: string){
    this.filteredValue.next(filterString)
  }

  setEditMode(editMode:boolean){
    this.editMode.next(editMode)
  }
}
