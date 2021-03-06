import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from "./components/error404/error404.component";
import { AuthenticationGuard } from "./guards/authentication.guard";

const routes: Routes = [
  {
    path: 'blog',
    loadChildren: () => import('../app-blog/app-blog.module').then(m => m.AppBlogModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('../authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../app-profile/app-profile.module').then(m => m.AppProfileModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootBrowserRoutingModule {
}
