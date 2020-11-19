import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  public newCollectionItems: Array<any> = [
    { id: 0,src: "../../assets/user-images/clothing/a8.jpg",heart: "favorite_border",price:"$34.47",wishlist: false, context:"sdfvsghd  jfjubf fefbeh"},
    { id: 1,src: "../../assets/user-images/clothing/a4.jpg",heart: "favorite_border",price:"$51.72",wishlist: false, context:"khinn jhbhf rdedcg"},
    { id: 2,src: "../../assets/user-images/clothing/a11.jpg",heart: "favorite_border",price:"$34.47",wishlist: false, context:"hbdhd dhgda dhdyhwd cg"},
    { id: 3,src: "../../assets/user-images/clothing/a13.jpg",heart: "favorite_border",price:"$51.18",wishlist: false, context:"wdgedh hdvsg xahsdxvd"},
    { id: 4,src: "../../assets/user-images/clothing/a3.jpg",heart: "favorite_border",price:"$36.57",wishlist: false, context:"ydg dygde dhdxcyscc"},
    { id: 5,src: "../../assets/user-images/clothing/a12.jpg",heart: "favorite_border",price:"$31.61",wishlist: false, context:"cdygdc hdwhsd hvshcxs csd"},
    { id: 6,src: "../../assets/user-images/clothing/a10.jpg",heart: "favorite_border",price:"$61.17",wishlist: false, context:"gxvgx hxvshcx hsxsb"},
    { id: 7,src: "../../assets/user-images/shoes/b9.jpg",heart: "favorite_border",price:"$50.00",wishlist: false, context:"ugcdbc chsgdhb hgxx"},
  ];


  public selectedItems: Array<any> =[];
  
  addToWishList(item: any) {
    item.wishlist = true;
    console.log(item);
    this.selectedItems.push(item);
    console.log("Favorite :"+this.selectedItems);

  }

  panelOpenState = false;



  constructor() {}

  ngOnInit(): void {
  }

  



}
