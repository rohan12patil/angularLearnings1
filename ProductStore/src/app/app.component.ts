import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 selectedProduct: any="";

  addProductToCart(product){
    console.log("In App component Parent: ",product);
    this.selectedProduct = product;
  }
}
