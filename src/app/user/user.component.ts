import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   public newCollectionList: Array<any> = [
    { id: 0,src: "../../assets/user-images/clothing/s1.jpg",heart: "favorite_border",wishlist: false},
    { id: 1,src: "../../assets/user-images/clothing/n1.jpg",heart: "favorite_border",wishlist: false},
    { id: 2,src: "../../assets/user-images/clothing/d7.jpg",heart: "favorite_border",wishlist: false},
  ];

  public trendList: Array<any> = [
    { id: 0,src: "../../assets/user-images/clothing/a15.jpg",heart: "favorite_border",wishlist: false},
    { id: 1,src: "../../assets/user-images/clothing/a16.jpg",heart: "favorite_border",wishlist: false},
    { id: 2,src: "../../assets/user-images/clothing/a17.jpg",heart: "favorite_border",wishlist: false},
  ];

  public shopList: Array<any> = [
    { id: 0,src: "../../assets/user-images/clothing/a1.jpg",heart: "favorite_border",price:"$49.99",wishlist: false},
    { id: 1,src: "../../assets/user-images/clothing/a14.jpg",heart: "favorite_border",price:"$40.99",wishlist: false},
    { id: 2,src: "../../assets/user-images/shoes/b8.jpg",heart: "favorite_border",price:"$50.00",wishlist: false},
    { id: 3,src: "../../assets/user-images/clothing/d5.jpg",heart: "favorite_border",price:"$38.00",wishlist: false},
  ];

  public wantedList: Array<any> = [
    { id: 0,src: "../../assets/user-images/clothing/a6.jpg",heart: "favorite_border",wishlist: false},
    { id: 1,src: "../../assets/user-images/clothing/d3.jpg",heart: "favorite_border",wishlist: false},
    { id: 2,src: "../../assets/user-images/clothing/s2.jpg",heart: "favorite_border",wishlist: false},
  ];


  
}
