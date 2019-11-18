import { Component, OnInit } from '@angular/core';
import { products } from '../interfaces/products'

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;
 
  // toggleShare($scope) {
  //   window.alert('Shared!');
  //   this.btnText = 'Shared';
  //   }

  public show:boolean = false;
  public buttonName:any = 'Share';

  ngOnInit() {  }

  toggle(){
    this.show = !this.show;

    if(this.show)
    this.buttonName = "Shared",
    window.alert('Shared!')
    
    else
    this.buttonName = "Share",
    window.alert('Canceled')

  }
}
