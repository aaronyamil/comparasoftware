import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './login/login.module#LoginModule',
  },
  {
    path: 'soft',
    loadChildren: './soft/soft.module#SoftModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // This way the path is hidden
  exports: [RouterModule],
})
export class AppRoutingModule {}
