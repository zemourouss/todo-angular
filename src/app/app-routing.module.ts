import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [{
  path: "todo",
  loadChildren: () => import("./modules/todo/todo.module").then((m) => m.TodoModule),
  canActivate: [MsalGuard]
},
{
  path: '',
  component: HomeComponent
}];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: !isIframe ? 'enabled' : 'disabled' // Don't perform initial navigation in iframes
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
