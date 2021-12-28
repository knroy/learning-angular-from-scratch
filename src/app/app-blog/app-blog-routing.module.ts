import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDefaultComponent } from "./components/blog-default/blog-default.component";
import { BlogPostsComponent } from "./components/blog-posts/blog-posts.component";
import { PostDetailsComponent } from "./components/post-details/post-details.component";
import { WriteBlogComponent } from "./components/write-blog/write-blog.component";

const routes: Routes = [
  {
    path: '',
    component: BlogDefaultComponent,
    children: [
      {
        path: 'create',
        component: WriteBlogComponent
      },
      {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
      },
      {
        path: 'posts',
        component: BlogPostsComponent
      },
      {
        path: 'posts/:id',
        component: PostDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppBlogRoutingModule {

}
