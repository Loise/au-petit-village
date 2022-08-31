import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    {
      "_id": "630e46c4da6658683db4e203",
      "price": 19,
      "picture": "https://as2.ftcdn.net/v2/jpg/04/84/20/09/1000_F_484200947_HHocxla7N27uDCh6gkdMIffOUhwX0Vdb.jpg",
      "description": "Ut sit anim sit cupidatat aliquip velit exercitation. Commodo labore ex dolore cupidatat occaecat aliquip. Sint eiusmod consequat voluptate consectetur ex proident pariatur aute enim adipisicing aliquip deserunt. Et sunt in labore aute do Lorem esse ipsum velit.\r\n",
      "name": "Gaulois chantant"
    },
    {
      "_id": "630e46c4784823ec049cb0d8",
      "price": 27,
      "picture": "https://as1.ftcdn.net/v2/jpg/04/20/38/04/1000_F_420380471_VvtRQCemv2GY59pqYDtbG6L5Kj8z9UeV.jpg",
      "description": "Lorem mollit amet aute laborum id officia incididunt aliqua ut irure consequat mollit officia aliquip. Consectetur non nisi Lorem in ipsum minim eiusmod minim non velit sit anim velit non. Dolor dolor qui aliquip commodo exercitation est excepteur laborum fugiat sint minim occaecat. Elit aliquip officia adipisicing nulla ullamco aliqua in nisi et excepteur excepteur cillum.\r\n",
      "name": "Gaulois surfer"
    },
    {
      "_id": "630e46c44b58f8e8926a9f1e",
      "price": 13,
      "picture": "https://as1.ftcdn.net/v2/jpg/04/56/64/58/1000_F_456645833_omXSzeXtKWcAC3nkc3ob1FMOYhDH4vMG.jpg",
      "description": "Eu reprehenderit Lorem officia cupidatat anim adipisicing anim occaecat irure adipisicing dolor irure. Minim dolore eiusmod veniam quis anim culpa ex minim nisi. Officia enim ullamco exercitation eu enim sit.\r\n",
      "name": "Gaulois gourmand"
    },
    {
      "_id": "630e46c4d8d5b710136aa506",
      "price": 22,
      "picture": "https://as2.ftcdn.net/v2/jpg/03/02/13/63/1000_F_302136316_Vb8quvH0lSGmVeZBqr1sds7Xpr0mvB8G.jpg",
      "description": "Dolor laboris culpa mollit nisi ea consequat aute pariatur esse in. Aute ea deserunt excepteur nulla magna eiusmod dolore. Cillum occaecat id nulla velit eu nostrud aliqua et. Ullamco culpa minim cupidatat tempor ea. Voluptate aliqua ex anim labore sit. Tempor eiusmod mollit irure excepteur adipisicing do incididunt excepteur magna laborum eiusmod occaecat reprehenderit. Sit et eiusmod quis laborum minim voluptate adipisicing.\r\n",
      "name": "Gaulois dragueur"
    },
    {
      "_id": "630e46c4ae4ed540df9c15f4",
      "price": 17,
      "picture": "https://as2.ftcdn.net/v2/jpg/03/47/72/43/1000_F_347724303_xhHuhGDITFJBbkAKMXwHeVRfvrBVxaak.jpg",
      "description": "Sit est officia cillum magna cupidatat velit voluptate culpa tempor ex et. Aliqua qui do laboris culpa ut consectetur. Enim tempor ipsum culpa id minim nulla. Tempor cupidatat cupidatat occaecat dolor sunt ullamco labore consectetur non exercitation irure ullamco. Pariatur aute sit consequat ut ad non consectetur. Aliqua cupidatat minim dolore amet esse do anim fugiat enim aliquip.\r\n",
      "name": "Gaulois en voiture"
    },
    {
      "_id": "630e46c4dc393f0b5df36e53",
      "price": 30,
      "picture": "https://as1.ftcdn.net/v2/jpg/04/35/55/02/1000_F_435550242_Szz20gdiP7NAC8GVgVgOBwYZypg0MRGe.jpg",
      "description": "Id officia ex reprehenderit commodo. Reprehenderit tempor amet laborum sint minim adipisicing mollit est cupidatat. Anim aliqua aliquip ipsum tempor.\r\n",
      "name": "Gaulois à moto"
    },
    {
      "_id": "630e46c481b5093bca6335dc",
      "price": 10,
      "picture": "https://as2.ftcdn.net/v2/jpg/04/27/16/33/1000_F_427163375_XdiBDI5xoJGQYryj2CrKAgNEvMmBKBhi.jpg",
      "description": "Ad ut consequat sunt aute cillum ut proident laborum aute velit occaecat nulla cupidatat. Eu do consequat pariatur id deserunt excepteur in irure nisi cillum in. Ex officia consequat ut aliqua et ut exercitation deserunt consectetur ad sit tempor incididunt. Sunt occaecat commodo veniam aliqua aute est ipsum ut Lorem anim et anim. Irure cillum consectetur sit proident officia consequat laborum ex duis ullamco mollit exercitation aliqua.\r\n",
      "name": "Gaulois de pâques"
    }
  ];

  constructor() { }
}
