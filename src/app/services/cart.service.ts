import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart(product: any) {
    this.items.push(product);

    let total = 0;

    this.items.forEach(function (item){
      total += item;
    })
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
