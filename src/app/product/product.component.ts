import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product',
  template: `
  <div class="root">
    <h2>{{product.name}}</h2>
    <img [src]="product.picture" />
    <p>{{product.description}}</p>
    <div class="content">
      <div class="price-likes">
        <b>{{product.price}} </b>
      </div>
    </div>
  </div>
  `,
  styles: [
    `
    .root {
      display: flex;
      flex-direction: column;
      margin: 10px;
      border: 2px solid lightgrey;
      border-radius: 20px;
      align-items: center;
      margin-bottom: 100px;
  }

  @media (max-width: 780px) { 
    .root {
      width: 100vw;
    }
  }
  
  .header {
      display: flex;
      flex-direction: column;
      margin: auto;
      text-align: center;

  }

  img {
    width: 50%;
    height: 50%;
    object-fit: cover;
    margin: auto;
}
  
  .content {
      display: flex;
      flex-direction: column;
      text-align: center;
  }
  
  .price-likes {
      display: flex;
      justify-content: space-around;
  }

  a{
    color: #DA001E;
  }
    `
  ]
})
export class ProductComponent implements OnInit {
  product: any = {
    "_id": "630e46c481b5093bca6335dc",
    "price": 12,
    "picture": "https://as1.ftcdn.net/v2/jpg/04/56/64/58/1000_F_456645833_omXSzeXtKWcAC3nkc3ob1FMOYhDH4vMG.jpg",
    "description": "Ad ut consequat sunt aute cillum ut proident laborum aute velit occaecat nulla cupidatat. Eu do consequat pariatur id deserunt excepteur in irure nisi cillum in. Ex officia consequat ut aliqua et ut exercitation deserunt consectetur ad sit tempor incididunt. Sunt occaecat commodo veniam aliqua aute est ipsum ut Lorem anim et anim. Irure cillum consectetur sit proident officia consequat laborum ex duis ullamco mollit exercitation aliqua.\r\n",
    "name": "Gaulois de pâques"
  };

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      let id = params['id']
      let searchedProduct = productsService.products.find((el) => el._id == id);
      this.product = searchedProduct;
    });
  }


  ngOnInit(): void {
  }

}
