import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductStartComponent } from './product-start/product-start.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
	declarations: [
		ProductsComponent,
		ProductStartComponent,
		ProductListComponent,
		ProductEditComponent,
		ProductDetailComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		SharedModule,
		ProductsRoutingModule
	]
})
export class ProductsModule {

}