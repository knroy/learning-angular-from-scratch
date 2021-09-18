import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogService } from "../../../root-browser/services/blog.service";
import { BlogPost } from "../../models/blog-post.model";

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit, OnDestroy {

  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) {

  }

  ngOnInit(): void {

    this.blogService.getAllPosts().subscribe((response: any) => {
      this.blogPosts = response;
    })

  }

  ngOnDestroy() {
    console.log('destroy for BlogPostsComponent')
  }

}
