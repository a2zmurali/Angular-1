import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit{

  ngOnInit(): void {
    this.obj.getProducts().subscribe({
      next:data => console.log(data),
      error:err =>console.log(err),
      complete:()=>console.log("Completed")
    })

  }


  data:string = '';
  constructor(private obj:DataService){
  }

  addItem(){
    const data = this.obj.getData();
    console.log(this.data);

  }
}
