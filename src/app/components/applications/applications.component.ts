import { Component, OnInit } from '@angular/core';
import { application } from './applications.module';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit{
    applications: application[] = [
      new application('ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, 'Figma',
       'Applied 3 days ago', '../../../assets/unsplash_DBe29bswzpk (1).png'),
       
       new application('ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, 'Figma',
       'Applied 3 days ago', '../../../assets/unsplash_5MlBMYDsGBY.svg'),
       
       new application('ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, 'Figma',
       'Applied 3 days ago', '../../../assets/unsplash_lVVs5skyWoo.png'),

       new application('ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, 'Figma',
       'Applied 3 days ago', '../../../assets/unsplash_PuhUJ3Cgdew.svg'),

       new application('ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, 'Figma',
       'Applied 3 days ago', '../../../assets/unsplash_qjpbN7RrfmA.svg') 
    ];
    constructor() {}

    ngOnInit(){

    }
}
