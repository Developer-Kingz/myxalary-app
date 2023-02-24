import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  enteredSearchValue: string = '';
  selectedOptionValue: string = 'All';
  selectedNumber: number = 30;

  @Output() searchTextChange = new EventEmitter(); 
  constructor(){}
  onSearchTextChanged(event: any){
    this.searchTextChange.emit(event.target.value);
    // console.log(this.enteredSearchValue);
  }

  @Output()
  OptionChanged: EventEmitter<string> = new EventEmitter<string>();
  onOptionChanged(){
    this.OptionChanged.emit(this.selectedOptionValue);
    //console.log(this.selectedOptionValue);
    
  }

 @Output() NumberChanged: EventEmitter<number> = new EventEmitter<number>();
  onNumberChanged(){
     this.NumberChanged.emit(this.selectedNumber);
  }
}
