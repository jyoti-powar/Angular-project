import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private data1:DataService) { }

  ngOnInit(): void {
  }
  prform1= new FormGroup({
    id: new FormControl(''),
    category: new FormControl(''),
    size: new FormControl(''),
    color: new FormControl(''),
    price: new FormControl('')
  })


  savepr(): void{

    console.log(this.prform1.value);
    this.data1.saveMonProd(this.prform1.value).subscribe(
      (data)=>{console.log(data)}
    )
}
}