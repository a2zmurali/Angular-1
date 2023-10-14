import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-mobiles-details',
  templateUrl: './mobiles-details.component.html',
  styleUrls: ['./mobiles-details.component.css']
})
export class MobilesDetailsComponent implements OnInit{


  constructor( private route:ActivatedRoute , private router: Router){}
  productId!:string | null;

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    //you can get data from backend for the particular selected product

  }


  navigateToMenu(){
    //Manual Navigation
    // private router: Router - neesds tobe declareds in constructor and import { ActivatedRoute , Router } from '@angular/router';
    const queryParams = {category:'Mobiles'};
    this.router.navigate(['/product/Mobiles'],{queryParams});

  }


}
