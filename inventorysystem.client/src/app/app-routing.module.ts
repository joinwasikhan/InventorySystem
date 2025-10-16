import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { AddProductComponent } from './product/add-product.component';
const routes: Routes = [
  { path: 'products', component: ProductListingComponent },
  { path: 'addproduct', component: AddProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
