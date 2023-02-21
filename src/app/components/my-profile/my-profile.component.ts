import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})

export class MyProfileComponent {
  editCreated = false;
  aboutCreated = false;
  experienceCreated = false;
  projectsCreated = false;
  educationCreated = false;
  documentCreated = false;
  
  onEdit(){
    this.editCreated = !this.editCreated
  }
  close(){
    this.editCreated = false;
  }
  onAbout(){
    this.aboutCreated = !this.aboutCreated
  }
  closeAbt(){
    this.aboutCreated = false;
  }
  onExperience(){
    this.experienceCreated = !this.experienceCreated
  }
  closeExperience(){
    this.experienceCreated = false;
  }
  onProjects(){
    this.projectsCreated = !this.projectsCreated
  }
  closeProjects(){
    this.projectsCreated = false;
  }
  onEducation(){
    this.educationCreated = !this.educationCreated
  }
  closeEducation(){
    this.educationCreated = false;
  }
  onDocuments(){
    this.documentCreated = !this.documentCreated
  }
  closeDocument(){
    this.documentCreated = false;
  }
}
