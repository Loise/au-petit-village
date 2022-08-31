import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="home"><h1>Bienvenue</h1>
    <p>
      Au petit village est une entreprise qui confectionne des figurines issues de la bande dessinée Astérix et Obélix. Elle cible une population jeune entre 30 et 55 ans, nostalgique. 
    </p>
  
    <h1>Voici nos produits</h1>
    <div>
      Chercher : <input type="text" id="search" name="search" (change)="saveSearch($event)" />
    </div>
    <div *ngIf="search != ''">La recherche : {{search}}</div>
    <button *ngIf="!sort" (click)="onClick()">Trier par ordre croissant</button>
    <button *ngIf="sort" (click)="onClick()">Trier par ordre décroissant</button>
    <div class="products">
      <app-product-card *ngFor="let product of (products | sortByPrice:sort | filterByName:search );" [product]="product" >
      </app-product-card>
    </div>
    </div>
  `,
  styles: [
    `
    .home {
      padding: 20px;
    }
    .products {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 100px;
      justify-content: center;
      
    }
    `
  ]
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  sort: boolean = true;
  search: string = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.products;
  }

  onClick() {
    this.sort = !this.sort;
  }

  saveSearch(event: any) {
    let newValue = event.target.value;
    this.search = newValue;
  } 

}
