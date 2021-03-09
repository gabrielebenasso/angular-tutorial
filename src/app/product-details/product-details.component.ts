import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { products } from '../products';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  product: any;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }//iniezione delle dipendenze

  ngOnInit(): void {
    // First get the product id from the current route.
  const routeParams: ParamMap = this.route.snapshot.paramMap;//mappa parametri
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
  }

}
