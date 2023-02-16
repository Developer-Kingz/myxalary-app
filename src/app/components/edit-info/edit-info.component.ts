import { Component, EventEmitter, Input, Output } from '@angular/core';
// import {editCreated} from '../my-profile/my-profile.component'

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent {
  @Input() editCreated = false

  close(){
    this.editCreated = false
  }
}
