import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftRoutingModule } from './soft-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    CreateComponent,
    UpdateComponent,
  ],
  imports: [CommonModule, SoftRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [FormsModule, FormBuilder],
})
export class SoftModule {}
