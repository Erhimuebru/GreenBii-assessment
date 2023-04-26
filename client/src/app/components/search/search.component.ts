// import { Component } from '@angular/core';
import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  filteredData: any;
  data: any;
  searchQuery: any;

  search() {
    this.filteredData = this.data.filter((item: { name: string; }) =>
      item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
