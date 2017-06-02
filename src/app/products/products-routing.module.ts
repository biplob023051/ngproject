import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductStartComponent } from './product-start/product-start.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'
const productRoutes: Routes = [
	{path: '', component: ProductsComponent, children: [
		{path: '', component: ProductStartComponent},
		{path: 'add', component: ProductEditComponent},
		{path: ':id/edit', component: ProductEditComponent},
		{path: ':id/detail', component: ProductDetailComponent}
	]}
];

@NgModule({
	imports: [RouterModule.forChild(productRoutes)],
	exports: [RouterModule]
})

export class ProductsRoutingModule {}