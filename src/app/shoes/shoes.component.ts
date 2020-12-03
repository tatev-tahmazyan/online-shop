import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent implements OnInit {

	public shoesList: Array<any> = [
    { id : 0, src : '../../assets/user-images/shoes/b1.jpg', heart : 'favorite_border', price : '$40.47', wishlist : false, context : 'sdfvsghd  jfjubf fefbeh', new : true},
    { id : 1, src : '../../assets/user-images/shoes/b2.jpg', heart : 'favorite_border', price : '$36.12', wishlist : false, context : 'khinn jhbhf rdedcg', new : true},
    { id : 2, src : '../../assets/user-images/shoes/b3.jpg', heart : 'favorite_border', price : '$90.38', wishlist : false, context : 'hbdhd dhgda dhdyhwd cg', new : true},
    { id : 3, src : '../../assets/user-images/shoes/b4.jpg', heart : 'favorite_border', price : '$41.18', wishlist : false, context : 'wdgedh hdvsg xahsdxvd', new : false},
    { id : 4, src : '../../assets/user-images/shoes/b5.jpg', heart : 'favorite_border', price : '$56.47', wishlist : false, context : 'ydg dygde dhdxcyscc', new : true},
    { id : 5, src : '../../assets/user-images/shoes/b6.jpg', heart : 'favorite_border', price : '$46.51', wishlist : false, context : 'cdygdc hdwhsd hvshcxs csd', new : true},
    { id : 6, src : '../../assets/user-images/shoes/b7.jpg', heart : 'favorite_border', price : '$48.27', wishlist : false, context : 'gxvgx hxvshcx hsxsb', new : false},
    { id : 7, src : '../../assets/user-images/shoes/b8.jpg', heart : 'favorite_border', price : '$30.60', wishlist : false, context : 'ugcdbc chsgdhb hgxx', new : false},
    { id : 8, src : '../../assets/user-images/shoes/b9.jpg', heart : 'favorite_border', price : '$60.30', wishlist : false, context : 'ghb vhsxhsx xxgavxh', new : false},
    { id : 9, src : '../../assets/user-images/shoes/b10.jpg', heart : 'favorite_border', price : '$47.30', wishlist : false, context : 'wqwsnj edwdbw dhdbwefc', new : false},
    { id : 10, src : '../../assets/user-images/shoes/b11.jpg', heart : 'favorite_border', price :'$62.00',wishlist : false, context :'ugcdbcv djhfsjdhf', new : false},
    { id : 11, src : '../../assets/user-images/shoes/b12.jpg', heart :'favorite_border', price : '$83.00', wishlist : false, context : 'djjdb stfd asas dad', new : false},
    { id : 12, src : '../../assets/user-images/shoes/b13.jpg', heart :'favorite_border', price : '$70.50', wishlist : false, context : 'iughjkoh hctx dcnj', new : false},
    { id : 13, src : '../../assets/user-images/shoes/b14.jpg', heart :'favorite_border', price : '$45.00', wishlist : false, context : 'rewewv fgfhv hghj m', new : false},
    { id : 14, src : '../../assets/user-images/shoes/b15.jpg', heart :'favorite_border', price : '$50.00', wishlist : false, context : 'tfgv gfaxa afavx', new : false},
  ];


  public selectedItems: Array<any> =[];
  
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

  addToWishList(item: any) {
    item.wishlist = true;
    console.log(item);
    this.selectedItems.push(item);
    console.log("Favorite :"+this.selectedItems);

  }


}
