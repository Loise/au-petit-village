import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  template: `
    <div class="footer">
      <span class="material-icons md-48 footerIcon">share</span>
    </div>
  `,
  styles: [
    `.footer {
      background-color: #151217;
      overflow: hidden;
      position:fixed;
      bottom:0px;
      width:100%;
      text-align: center;
    }
    .footerIcon {
      color: white;
    }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
