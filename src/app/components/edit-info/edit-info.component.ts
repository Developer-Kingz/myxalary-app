import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit{
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.editForm = new FormGroup({
      'fullname': new FormControl(null, Validators.required),
      'phone': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'birthday': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'gender': new FormControl('male', Validators.required),
      'location': new FormControl(null, Validators.required),
      'skills': new FormControl(null, Validators.required),
      'tools': new FormControl(null, Validators.required),
    });
  }

  onSubmit(){
    console.log(this.editForm);
  }
}
