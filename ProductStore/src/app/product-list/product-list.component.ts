import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

   public products:any = [
     {name:'iPhoneSE',description:'IPhone SE is a compact phone',OS:'iOS'},
     {name:'iPhone6',description:'IPhone 6 is a verstaile & handy mobile phone',OS:'iOS'},
     {name:'iPhone7',description:'IPhone 7 came with improvements in camera & processing power',OS:'iOS'},
     {name:'iPhoneX',description:'IPhone X  is a radical new design features no home button & full screen layout',OS:'iOS'},
     {name:'Pixel 2',description:'Android phone optimised for performance',OS:'Android'},
     {name:'OnePlus One',description:'One Plus features a new design & high performant phones with huge Storage & processing capabilities',OS:'Android'}
  ];

  

  constructor() { }

  ngOnInit() {
  }

}
