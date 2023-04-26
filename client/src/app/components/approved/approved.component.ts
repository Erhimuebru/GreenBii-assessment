import { Component } from '@angular/core';
import { HttpService } from 'src/http.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent {

  

  products: any;

  constructor(private http:HttpService){}
  ngOnInit(){
    this.http.getProduct().subscribe(data => { 
      this.products = data;
    });
  }


}
