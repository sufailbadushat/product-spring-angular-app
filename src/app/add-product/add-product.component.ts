import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  
  constructor(private api: ApiService) { }
  
  productCode = ""
  name = ""
  manufacturingDate = ""
  expiryDate = ""
  brand = ""
  price = ""
  sellerName = ""
  distributorName = ""


  readProduct = () => {
    let product: any = 
    {
      "productCode": this.productCode,
      "name": this.name,
      "manufacturingDate": this.manufacturingDate,
      "expiryDate": this.expiryDate,
      "brand": this.brand,
      "price": this.price,
      "sellerName": this.sellerName,
      "distributorName": this.distributorName
    }
    console.log(product);
    
    
    this.api.addProduct(product).subscribe(
      (response:any) => {
        console.log(response);
        if (response.status == "success") {
          alert("Course succesfully added...!");
        
        } else {
          alert("Something went wrong...!")
        }
      }
    )
  }


}
