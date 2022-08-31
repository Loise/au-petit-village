import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="topnav">
      <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">Accueil</a>
      <a routerLink="about" routerLinkActive="active">A propos</a>
    </div>
  `,
  styles: [`
  /* Add a black background color to the top navigation */
  .topnav {
    background-color: #151217;
    overflow: hidden;
  }
  
  /* Style the links inside the navigation bar */
  .topnav a {
    float: left;
    color: #F9D0A3;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  
  /* Change the color of links on hover */
  .topnav a:hover {
    background-color: #FDD90B;
    color: black;
  }
  
  /* Add a color to the active/current link */
  .topnav a.active {
    background-color: #DA001E;
    color: white;
  }`
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
