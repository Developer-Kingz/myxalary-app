import { Component } from '@angular/core';
import { job } from './my-jobs.module';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css']
})
export class MyJobsComponent {
  jobs: job[] = [
    new job('ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, 'Figma',
     'Applied 3 days ago', '../../../assets/unsplash_DBe29bswzpk (1).png'),
     
     new job('ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, 'Figma',
     'Applied 3 days ago', '../../../assets/unsplash_5MlBMYDsGBY.svg'),
     
     new job('ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, 'Figma',
     'Applied 3 days ago', '../../../assets/unsplash_lVVs5skyWoo.png'),

     new job('ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, 'Figma',
     'Applied 3 days ago', '../../../assets/unsplash_PuhUJ3Cgdew.svg'),

     new job('ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, 'Figma',
     'Applied 3 days ago', '../../../assets/unsplash_qjpbN7RrfmA.svg') 
  ];
}
