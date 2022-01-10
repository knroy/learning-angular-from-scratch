import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({})
};

@Injectable({
  providedIn: "root"
})
export class BackendService {

  baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {

  }

  register(payload: any) {
    let registrationUrl = `${this.baseUrl}/register`;
    return this.httpClient.post(registrationUrl, payload);
  }

  login(payload: any) {
    let registrationUrl = `${this.baseUrl}/login`;
    return this.httpClient.post(registrationUrl, payload);
  }

  GetLoggedInUser() {
    let userDetailsUrl = `${this.baseUrl}/uam/GetLoggedInUser`;
    return this.httpClient.get(userDetailsUrl, httpOptions);
  }

  CreateNewBlog(blogData: any) {
    let blogCreateUrl = `${this.baseUrl}/blog/create`;
    return this.httpClient.post(blogCreateUrl, blogData, httpOptions);
  }

  Blogs() {
    let blogCreateUrl = `${this.baseUrl}/blogs`;
    return this.httpClient.get(blogCreateUrl, httpOptions);
  }

}
