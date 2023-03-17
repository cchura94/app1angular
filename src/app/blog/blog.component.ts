import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  public titulo:String = "Mi Blog";
  public estado: Boolean = false;
  public articulos:any[] = [];

  constructor(private http: HttpClient){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (res:any) => {
        console.log(res)

        this.articulos = res

      }
    )
  }


}
