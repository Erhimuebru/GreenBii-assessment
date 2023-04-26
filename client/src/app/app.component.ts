import { Component } from '@angular/core';
import { HttpService } from 'src/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
products: Object | undefined;

  constructor(private http:HttpService){}

 

}
