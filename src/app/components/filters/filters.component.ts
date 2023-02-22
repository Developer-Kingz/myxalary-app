import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  enteredSearchValue: string = '';

  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChange.emit(this.enteredSearchValue);
    // console.log(this.enteredSearchValue);
    
  }
}
