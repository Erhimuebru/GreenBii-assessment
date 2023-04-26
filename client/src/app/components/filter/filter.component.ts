import { Component } from '@angular/core';
import { HttpService } from 'src/http.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  item:any
  data:any
  constructor(private http:HttpService){}

 
}
