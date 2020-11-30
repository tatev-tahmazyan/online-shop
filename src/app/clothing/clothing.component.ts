import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.scss']
})
export class ClothingComponent implements OnInit {

 
  public clothingList: Array<any> = [
    { id : 0, src : '../../assets/user-images/clothing/a8.jpg', heart : 'favorite_border', price : '$34.47', wishlist : false, context : 'sdfvsghd  jfjubf fefbeh', new : true},
    { id : 1, src : '../../assets/user-images/clothing/a4.jpg', heart : 'favorite_border', price : '$51.72', wishlist : false, context : 'khinn jhbhf rdedcg', new : true},
    { id : 2, src : '../../assets/user-images/clothing/a11.jpg', heart : 'favorite_border', price : '$34.47', wishlist : false, context : 'hbdhd dhgda dhdyhwd cg', new : true},
    { id : 3, src : '../../assets/user-images/clothing/a13.jpg', heart : 'favorite_border', price : '$51.18', wishlist : false, context : 'wdgedh hdvsg xahsdxvd', new : true},
    { id : 4, src : '../../assets/user-images/clothing/a3.jpg', heart : 'favorite_border', price : '$36.57', wishlist : false, context : 'ydg dygde dhdxcyscc', new : true},
    { id : 5, src : '../../assets/user-images/clothing/a12.jpg', heart : 'favorite_border', price : '$31.61', wishlist : false, context : 'cdygdc hdwhsd hvshcxs csd', new : true},
    { id : 6, src : '../../assets/user-images/clothing/a10.jpg', heart : 'favorite_border', price : '$61.17', wishlist : false, context : 'gxvgx hxvshcx hsxsb', new : false},
    { id : 7, src : '../../assets/user-images/clothing/a36.jpg', heart : 'favorite_border', price : '$50.00', wishlist : false, context : 'ugcdbc chsgdhb hgxx', new : false},
    { id : 8, src : '../../assets/user-images/clothing/a37.jpg', heart : 'favorite_border', price : '$40.00', wishlist : false, context : 'ghb vhsxhsx xxgavxh', new : false},
    { id : 9, src : '../../assets/user-images/clothing/a38.jpg', heart : 'favorite_border', price : '$37.00', wishlist : false, context : 'wqwsnj edwdbw dhdbwefc', new : false},
    { id : 10, src : '../../assets/user-images/clothing/a25.jpg', heart : 'favorite_border', price :'$62.00',wishlist : false, context :'ugcdbcv djhfsjdhf', new : false},
    { id : 11, src : '../../assets/user-images/clothing/a20.jpg', heart :'favorite_border', price : '$63.00', wishlist : false, context : 'djjdb stfd asas dad', new : false},
    { id : 12, src : '../../assets/user-images/clothing/a26.jpg', heart :'favorite_border', price : '$70.00', wishlist : false, context : 'iughjkoh hctx dcnj', new : false},
    { id : 13, src : '../../assets/user-images/clothing/a27.jpg', heart :'favorite_border', price : '$35.00', wishlist : false, context : 'rewewv fgfhv hghj m', new : false},
    { id : 14, src : '../../assets/user-images/clothing/a28.jpg', heart :'favorite_border', price : '$40.00', wishlist : false, context : 'tfgv gfaxa afavx', new : false},
    { id : 15, src : '../../assets/user-images/clothing/a5.jpg', heart : 'favorite_border', price : '$50.47', wishlist : false, context : 'sdfvsghd  jfjubf fefbeh', new : false},
    { id : 16, src : '../../assets/user-images/clothing/a7.jpg', heart : 'favorite_border', price : '$61.00', wishlist : false, context : 'khinn jhbhf rdedcg', new : false},
    { id : 17, src : '../../assets/user-images/clothing/b1.jpg', heart : 'favorite_border', price : '$39.12', wishlist : false, context : 'hbdhd dhgda dhdyhwd cg', new : false},
    { id : 18, src : '../../assets/user-images/clothing/b2.jpg', heart : 'favorite_border', price : '$40.14', wishlist : false, context : 'wdgedh hdvsg xahsdxvd', new : false},
    { id : 19, src : '../../assets/user-images/clothing/b3.jpg', heart : 'favorite_border', price : '$41.86', wishlist : false, context : 'ydg dygde dhdxcyscc', new : false},
    { id : 20, src : '../../assets/user-images/clothing/b4.jpg', heart : 'favorite_border', price : '$50.00', wishlist : false, context : 'cdygdc hdwhsd hvshcxs csd', new : false},
    { id : 21, src : '../../assets/user-images/clothing/b5.jpg', heart : 'favorite_border', price : '$52.84', wishlist : false, context : 'gxvgx hxvshcx hsxsb', new : false},
    { id : 22, src : '../../assets/user-images/clothing/b6.jpg', heart : 'favorite_border', price : '$40.00', wishlist : false, context : 'ugcdbc chsgdhb hgxx', new : false},
    { id : 23, src : '../../assets/user-images/clothing/d2.jpg', heart : 'favorite_border', price : '$39.00', wishlist : false, context : 'ghb vhsxhsx xxgavxh', new : false},
    { id : 24, src : '../../assets/user-images/clothing/d4.jpg', heart : 'favorite_border', price : '$45.20', wishlist : false, context : 'wqwsnj edwdbw dhdbwefc', new : false},
    { id : 25, src : '../../assets/user-images/clothing/s3.jpg', heart : 'favorite_border', price : '$50.16', wishlist : false, context : 'ugcdbcv djhfsjdhf', new : false},
    { id : 26, src : '../../assets/user-images/clothing/d1.jpg', heart : 'favorite_border', price : '$53.34', wishlist : false, context : 'djjdb stfd asas dad', new : false},
    { id : 27, src : '../../assets/user-images/clothing/a29.jpg', heart :'favorite_border', price : '$60.00', wishlist : false, context : 'iughjkoh hctx dcnj', new : false},
    { id : 28, src : '../../assets/user-images/clothing/a30.jpg', heart :'favorite_border', price : '$34.20', wishlist : false, context : 'rewewv fgfhv hghj m', new : false},
  ];


  public selectedItems: Array<any> =[];
  
  addToWishList(item: any) {
    item.wishlist = true;
    console.log(item);
    this.selectedItems.push(item);
    console.log("Favorite :"+this.selectedItems);

  }

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }


}
