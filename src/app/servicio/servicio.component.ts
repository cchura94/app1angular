import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent {

  // https://dev.to/api/articles
  public servicios:any[] = [];

  constructor(private http: HttpClient){
    this.http.get('https://dev.to/api/articles?page=2').subscribe(
      (res:any) => {
        console.log(res)

        this.servicios = res
      },
      (err: any) => {
        alert("Ocurrio un error al pedir información")
      }
    )
  }

}
