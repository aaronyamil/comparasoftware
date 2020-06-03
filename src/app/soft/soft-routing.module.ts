import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'soft', redirectTo: 'soft/home', pathMatch: 'full' },
  { path: 'soft/home', component: HomeComponent },
  { path: 'soft/detail/:Id', component: DetailComponent },
  { path: 'soft/create', component: CreateComponent },
  { path: 'soft/update/:Id', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoftRoutingModule {}
