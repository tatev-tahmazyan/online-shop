import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.scss']
})
export class ClothingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public clothingList: Array<any> = [
    { id: 0,src: "../../assets/user-images/clothing/a5.jpg",heart: "favorite_border",price:"$50.47",wishlist: false, context:"sdfvsghd  jfjubf fefbeh"},
    { id: 1,src: "../../assets/user-images/clothing/a7.jpg",heart: "favorite_border",price:"$61.00",wishlist: false, context:"khinn jhbhf rdedcg"},
    { id: 2,src: "../../assets/user-images/clothing/b1.jpg",heart: "favorite_border",price:"$39.12",wishlist: false, context:"hbdhd dhgda dhdyhwd cg"},
    { id: 3,src: "../../assets/user-images/clothing/b2.jpg",heart: "favorite_border",price:"$40.14",wishlist: false, context:"wdgedh hdvsg xahsdxvd"},
    { id: 4,src: "../../assets/user-images/clothing/b3.jpg",heart: "favorite_border",price:"$41.86",wishlist: false, context:"ydg dygde dhdxcyscc"},
    { id: 5,src: "../../assets/user-images/clothing/b4.jpg",heart: "favorite_border",price:"$50.00",wishlist: false, context:"cdygdc hdwhsd hvshcxs csd"},
    { id: 6,src: "../../assets/user-images/clothing/b5.jpg",heart: "favorite_border",price:"$52.84",wishlist: false, context:"gxvgx hxvshcx hsxsb"},
    { id: 7,src: "../../assets/user-images/clothing/b6.jpg",heart: "favorite_border",price:"$40.00",wishlist: false, context:"ugcdbc chsgdhb hgxx"},
    { id: 8,src: "../../assets/user-images/clothing/d2.jpg",heart: "favorite_border",price:"$39.00",wishlist: false, context:"ghb vhsxhsx xxgavxh"},
    { id: 9,src: "../../assets/user-images/clothing/d4.jpg",heart: "favorite_border",price:"$45.20",wishlist: false, context:"wqwsnj edwdbw dhdbwefc"},
    { id: 10,src: "../../assets/user-images/clothing/s3.jpg",heart: "favorite_border",price:"$50.16",wishlist: false, context:"ugcdbcv djhfsjdhf"},
    { id: 11,src: "../../assets/user-images/clothing/d1.jpg",heart: "favorite_border",price:"$53.34",wishlist: false, context:"djjdb stfd asas dad"},
    { id: 12,src: "../../assets/user-images/clothing/a29.jpg",heart: "favorite_border",price:"$60.00",wishlist: false, context:"iughjkoh hctx dcnj"},
    { id: 13,src: "../../assets/user-images/clothing/a30.jpg",heart: "favorite_border",price:"$34.20",wishlist: false, context:"rewewv fgfhv hghj m"},
    { id: 14,src: "../../assets/user-images/clothing/a31.jpg",heart: "favorite_border",price:"$30.00",wishlist: false, context:"tfgv gfaxa afavx"},
    { id: 15,src: "../../assets/user-images/clothing/a32.jpg",heart: "favorite_border",price:"$51.10",wishlist: false, context:"edgwbdfw efhbwfe jjhb"},
    { id: 16,src: "../../assets/user-images/clothing/a33.jpg",heart: "favorite_border",price:"$54.35",wishlist: false, context:"wegbe dgwebfb dcshdee"},
    { id: 17,src: "../../assets/user-images/clothing/a34.jpg",heart: "favorite_border",price:"$60.60",wishlist: false, context:"egebfe frbfrf fehfef"},
    { id: 18,src: "../../assets/user-images/clothing/a35.jpg",heart: "favorite_border",price:"$33.00",wishlist: false, context:"rfejf feebfe fsdfbd"},
  ];


  public selectedItems: Array<any> =[];
  
  addToWishList(item: any) {
    item.wishlist = true;
    console.log(item);
    this.selectedItems.push(item);
    console.log("Favorite :"+this.selectedItems);

  }

  panelOpenState = false;


}
