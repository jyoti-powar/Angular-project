import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-updatepro',
  templateUrl: './updatepro.component.html',
  styleUrls: ['./updatepro.component.css']
})
export class UpdateproComponent implements OnInit {
  curr_id: any;

  constructor(private data1:DataService, private acr:ActivatedRoute) { }

  ngOnInit(): void {
    this.acr.params.subscribe(
      (data)=>{this.curr_id=data['id']}
      
    )
  
    this.acr
  }

  prform1 = new FormGroup({
    id: new FormControl(''),
    category: new FormControl(''),
    size: new FormControl(''),
    color: new FormControl(''),
    price: new FormControl('')
  })

  updateprod()
  {
    this.data1.updateProd(this.prform1.value,this.curr_id).subscribe(
      (info)=>{console.log(info)}
    )

  }


}
