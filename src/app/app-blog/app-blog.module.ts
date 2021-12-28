import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppBlogRoutingModule } from './app-blog-routing.module';
import { BlogDefaultComponent } from './components/blog-default/blog-default.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { WriteBlogComponent } from './components/write-blog/write-blog.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [
    BlogDefaultComponent,
    BlogPostsComponent,
    PostDetailsComponent,
    WriteBlogComponent
  ],
  imports: [
    CommonModule,
    AppBlogRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule
  ]
})
export class AppBlogModule { }
