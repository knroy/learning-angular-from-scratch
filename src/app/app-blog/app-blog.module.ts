import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppBlogRoutingModule } from './app-blog-routing.module';
import { BlogDefaultComponent } from './components/blog-default/blog-default.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';


@NgModule({
  declarations: [
    BlogDefaultComponent,
    BlogPostsComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    AppBlogRoutingModule
  ]
})
export class AppBlogModule { }
