import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { UpdateproComponent } from './updatepro/updatepro.component';

const routes: Routes = [
    
  {path:'add-product',component:AddProductComponent},
  {path:'product',component:ProductComponent},
  {path:'updatepro/:id',component:UpdateproComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
