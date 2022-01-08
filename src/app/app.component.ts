import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fakeapi';
  getData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchgetData();
  }

  fetchgetData() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res: any) => {
      this.getData = res;
    })

  }
}
