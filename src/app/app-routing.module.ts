import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'createProduct', component: ProductCreateComponent},
  {path: 'editProduct/:id', component: ProductCreateComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
