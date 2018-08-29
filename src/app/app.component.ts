import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public posts: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const url = 'https://jsonplaceholder.typicode.com/posts'; // OK
    // const url = 'https://jsonplaceholder.typicode.com/posts1234'; // Error 404
    // const url = 'https://google.com'; // Error 405

    this.http.get(url).subscribe((res: {
      userId: number;
      id: number;
      title: string;
      body: string;
    }[]) => {
      this.posts = res;
    });
  }

}
