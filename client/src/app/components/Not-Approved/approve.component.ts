import { Component } from '@angular/core';
import { HttpService } from 'src/http.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent {

  products: any;
  data:any
  filteredProducts: any;
  searchTerm: any;

  constructor(private http:HttpService){}
  ngOnInit(){
    this.http.getProduct().subscribe(data => { 
      this.products = data;
    });
  }

}
