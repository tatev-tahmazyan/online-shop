import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  public shopList1: Array<any> = [
    { id: 0,src: "../../assets/user-images/clothing/a8.jpg",heart: "favorite_border",price:"$34.47",wishlist: false},
    { id: 1,src: "../../assets/user-images/clothing/a4.jpg",heart: "favorite_border",price:"$51.72",wishlist: false},
    { id: 2,src: "../../assets/user-images/clothing/a11.jpg",heart: "favorite_border",price:"$34.47",wishlist: false},
    { id: 3,src: "../../assets/user-images/clothing/a13.jpg",heart: "favorite_border",price:"$51.18",wishlist: false},
  ];

  public shopList2: Array<any> = [
    { id: 0,src: "../../assets/user-images/clothing/a3.jpg",heart: "favorite_border",price:"$36.57",wishlist: false},
    { id: 1,src: "../../assets/user-images/clothing/a12.jpg",heart: "favorite_border",price:"$31.61",wishlist: false},
    { id: 2,src: "../../assets/user-images/clothing/a10.jpg",heart: "favorite_border",price:"$61.17",wishlist: false},
    { id: 3,src: "../../assets/user-images/shoes/b9.jpg",heart: "favorite_border",price:"$50.00",wishlist: false},
  ];



isHover(){
  document.getElementById("favorite").style.background = "white";
  document.getElementById("favorite").style.display = "block";
  
}

isNotHover(){
  document.getElementById("favorite").style.display = "none";
}

click(){
  document.getElementById("favorite").style.color = "red";
}
  
  constructor() {}

  ngOnInit(): void {
  }

  



}
