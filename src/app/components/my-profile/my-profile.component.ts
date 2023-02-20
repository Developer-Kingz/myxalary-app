import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})

export class MyProfileComponent {
  editCreated = false;

  onEdit(){
    this.editCreated = !this.editCreated
  }
  close(){
    this.editCreated = false;
  }
}
