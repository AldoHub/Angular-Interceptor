import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-interceptor';

  constructor(private httpClient: HttpClient){

  }

  public posts: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[] = [];


  ngOnInit(){
    
    const url = 'https://jsonplaceholder.typicode.com/posts'; // OK
    // const url = 'https://jsonplaceholder.typicode.com/posts1234'; // Error 404
    // const url = 'https://google.com'; // Error 405


    this.httpClient.get(url).subscribe((res: {
      userId: number;
      id: number;
      title: string;
      body: string;
    }[]) => {
      this.posts = res;
      console.log(res)
    });
  }


}
