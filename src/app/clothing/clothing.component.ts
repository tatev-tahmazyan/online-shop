import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.scss']
})
export class ClothingComponent implements OnInit {

 
  public clothingList: Array<any> = [
    { id : 0, src : '../../assets/user-images/clothing/a8.jpg', heart : 'favorite_border', price : 34.35, wishlist : false, context : 'sdfvsghd  jfjubf fefbeh', new : true},
    { id : 1, src : '../../assets/user-images/clothing/a4.jpg', heart : 'favorite_border', price : 54.64, wishlist : false, context : 'khinn jhbhf rdedcg', new : true},
    { id : 2, src : '../../assets/user-images/clothing/a11.jpg', heart : 'favorite_border', price : 25.12, wishlist : false, context : 'hbdhd dhgda dhdyhwd cg', new : true},
    { id : 3, src : '../../assets/user-images/clothing/a13.jpg', heart : 'favorite_border', price : 46.17, wishlist : false, context : 'wdgedh hdvsg xahsdxvd', new : true},
    { id : 4, src : '../../assets/user-images/clothing/a3.jpg', heart : 'favorite_border', price : 51.15, wishlist : false, context : 'ydg dygde dhdxcyscc', new : true},
    { id : 5, src : '../../assets/user-images/clothing/a12.jpg', heart : 'favorite_border', price : 37.00, wishlist : false, context : 'cdygdc hdwhsd hvshcxs csd', new : true},
    { id : 6, src : '../../assets/user-images/clothing/a10.jpg', heart : 'favorite_border', price : 36.56, wishlist : false, context : 'gxvgx hxvshcx hsxsb', new : false},
    { id : 7, src : '../../assets/user-images/clothing/a36.jpg', heart : 'favorite_border', price : 50.56, wishlist : false, context : 'ugcdbc chsgdhb hgxx', new : false},
    { id : 8, src : '../../assets/user-images/clothing/a37.jpg', heart : 'favorite_border', price : 47.36, wishlist : false, context : 'ghb vhsxhsx xxgavxh', new : false},
    { id : 9, src : '../../assets/user-images/clothing/a38.jpg', heart : 'favorite_border', price : 20.59, wishlist : false, context : 'wqwsnj edwdbw dhdbwefc', new : false},
    { id : 10, src : '../../assets/user-images/clothing/a25.jpg', heart : 'favorite_border', price : 60.00, wishlist : false, context :'ugcdbcv djhfsjdhf', new : false},
    { id : 11, src : '../../assets/user-images/clothing/a20.jpg', heart :'favorite_border', price : 63.36, wishlist : false, context : 'djjdb stfd asas dad', new : false},
    { id : 12, src : '../../assets/user-images/clothing/a26.jpg', heart :'favorite_border', price : 70.54, wishlist : false, context : 'iughjkoh hctx dcnj', new : false},
    { id : 13, src : '../../assets/user-images/clothing/a27.jpg', heart :'favorite_border', price : 19.00, wishlist : false, context : 'rewewv fgfhv hghj m', new : false},
    { id : 14, src : '../../assets/user-images/clothing/a28.jpg', heart :'favorite_border', price : 40.56, wishlist : false, context : 'tfgv gfaxa afavx', new : false},
    { id : 15, src : '../../assets/user-images/clothing/a5.jpg', heart : 'favorite_border', price : 50.78, wishlist : false, context : 'sdfvsghd  jfjubf fefbeh', new : false},
    { id : 16, src : '../../assets/user-images/clothing/a7.jpg', heart : 'favorite_border', price : 61.14, wishlist : false, context : 'khinn jhbhf rdedcg', new : false},
    { id : 17, src : '../../assets/user-images/clothing/b1.jpg', heart : 'favorite_border', price : 39.89, wishlist : false, context : 'hbdhd dhgda dhdyhwd cg', new : false},
    { id : 18, src : '../../assets/user-images/clothing/b2.jpg', heart : 'favorite_border', price : 41.23, wishlist : false, context : 'wdgedh hdvsg xahsdxvd', new : false},
    { id : 19, src : '../../assets/user-images/clothing/b3.jpg', heart : 'favorite_border', price : 43.81, wishlist : false, context : 'ydg dygde dhdxcyscc', new : false},
    { id : 20, src : '../../assets/user-images/clothing/b4.jpg', heart : 'favorite_border', price : 50.36, wishlist : false, context : 'cdygdc hdwhsd hvshcxs csd', new : false},
    { id : 21, src : '../../assets/user-images/clothing/b5.jpg', heart : 'favorite_border', price : 52.00, wishlist : false, context : 'gxvgx hxvshcx hsxsb', new : false},
    { id : 22, src : '../../assets/user-images/clothing/b6.jpg', heart : 'favorite_border', price : 46.65, wishlist : false, context : 'ugcdbc chsgdhb hgxx', new : false},
    { id : 23, src : '../../assets/user-images/clothing/d2.jpg', heart : 'favorite_border', price : 45.36, wishlist : false, context : 'ghb vhsxhsx xxgavxh', new : false},
    { id : 24, src : '../../assets/user-images/clothing/d4.jpg', heart : 'favorite_border', price : 45.21, wishlist : false, context : 'wqwsnj edwdbw dhdbwefc', new : false},
    { id : 25, src : '../../assets/user-images/clothing/s3.jpg', heart : 'favorite_border', price : 50.31, wishlist : false, context : 'ugcdbcv djhfsjdhf', new : false},
    { id : 26, src : '../../assets/user-images/clothing/d1.jpg', heart : 'favorite_border', price : 53.56, wishlist : false, context : 'djjdb stfd asas dad', new : false},
    { id : 27, src : '../../assets/user-images/clothing/a29.jpg', heart :'favorite_border', price : 60.47, wishlist : false, context : 'iughjkoh hctx dcnj', new : false},
    { id : 28, src : '../../assets/user-images/clothing/a30.jpg', heart :'favorite_border', price : 34.44, wishlist : false, context : 'rewewv fgfhv hghj m', new : false},
  ];


  public selectedItems: Array<any> =[];

  // public filtredPriceList: Array<any> =[];

  public filtredClothing: Array<any> = this.clothingList 

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }
  addToWishList(item: any) : void {
    item.wishlist = true;
    console.log(item);
    this.selectedItems.push(item);
    console.log("Favorite : "+this.selectedItems);
  }



  filteredPrice(p1,p2 : any) : void {
    for (let i = 0; i < filtredClothing.length; i++) {
      if(this.filtredClothing.price < p2){
           
      }
      if(this.filtredClothing.price > p1 && this.filtredClothing.price < p2){
        
      }
      if(this.filtredClothing.price > p1 && this.filtredClothing.price < p2){
        
      }
      if(this.filtredClothing.price > p1){
       
      }
    }
  }
}
