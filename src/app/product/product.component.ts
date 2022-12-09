import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private data1:DataService, private route:Router) { }

  ngOnInit(): void {
    this.getData()
  }

prdList:any;
  getData(){
    this.data1.geturl().subscribe(
      (data)=>{this.prdList=data}
    )
  }


  onedit(id:any)
{
  this.route.navigate(['/updatepro',id])
}

delflag:any

  delId(id:any)
  {

    return this.data1.delProd(id).subscribe((data)=>{console.log(data);
    alert("Data Deleted")})
  }


}
