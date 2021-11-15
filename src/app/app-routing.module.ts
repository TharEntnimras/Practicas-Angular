import { EmpleadoComponent } from './empleado/empleado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { GuardiaLinksGuard } from './guardia-links.guard';

const routes: Routes = [
  {
    path: 'first-component',
    component: HeaderComponent,
    children: [
      { path: 'child-a', component: ChildAComponent },
      { path: 'child-b', component: ChildBComponent },
    ],
  },
  {
    path: 'second-component/:id',
    component: EmpleadoComponent,
    canActivate: [GuardiaLinksGuard],
  },
  { path: 'intro-component/:id', component: IntroComponent },
  { path: '**', component: IntroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
