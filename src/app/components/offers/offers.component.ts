import { Component } from '@angular/core';
import { offer } from './offers.module';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
  offers: offer[] = [
    new offer('ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, 'Figma',
     'Applied 3 days ago', '../../../assets/unsplash_DBe29bswzpk (1).png'),
     
     new offer('ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, 'Figma',
     'Applied 3 days ago', '../../../assets/unsplash_5MlBMYDsGBY.svg'),
     
     new offer('ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, 'Figma',
     'Applied 3 days ago', '../../../assets/unsplash_lVVs5skyWoo.png'),

     new offer('ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, 'Figma',
     'Applied 3 days ago', '../../../assets/unsplash_PuhUJ3Cgdew.svg'),

     new offer('ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, 'Figma',
     'Applied 3 days ago', '../../../assets/unsplash_qjpbN7RrfmA.svg') 
  ];
}
