import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogService } from "../../../root-browser/services/blog.service";
import { BlogPost } from "../../models/blog-post.model";
import { Router } from "@angular/router";
import { BackendService } from "../../../root-browser/services/backend.service";

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit, OnDestroy {

  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogService,
              private router: Router,
              private backendService: BackendService) {

  }

  ngOnInit(): void {
    this.GetAllBlogPosts();
  }

  GetAllBlogPosts() {
    this.backendService.Blogs().subscribe((response: any) => {
      this.blogPosts = response;
    })
  }

  ngOnDestroy() {
    console.log('destroy for BlogPostsComponent')
  }

  onWriteNewBlog() {
    this.router.navigate(['/blog/create']);
  }
}
