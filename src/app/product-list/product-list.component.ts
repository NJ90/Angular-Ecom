import { Component, OnInit } from '@angular/core';
import { products } from '../interfaces/products'

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;

  share(){
    window.alert('Shared!');
    }


  constructor() { }

  ngOnInit() {  }

}
