import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div class='about'>
    <h1>A propos du site Au petit village</h1>
    <p>
      Le créateur de la marque est un fou amoureux de l'univers d'Astérix et Obélix, et à voulu créer sa propre marque en s'inspirant du génie de Goscini et Uderzo
    </p>
    <img src="https://as2.ftcdn.net/v2/jpg/03/02/13/63/1000_F_302136316_Vb8quvH0lSGmVeZBqr1sds7Xpr0mvB8G.jpg" alt="la mascotte" />
    <p>C'est ainsi que la mascotte de la marque est né !</p>
    </div>
  `,
  styles: [
    `.about {padding: 20px}`
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
