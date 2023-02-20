import { Component, OnInit } from '@angular/core';
import { application } from './applications.module';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit{
    applications: application[] = [
      new application( 1, 'ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, 'Figma',
       'Applied 3 days ago', '../../../assets/unsplash_DBe29bswzpk (1).png'),
       
       new application( 2, 'Shell Company', 'intermediate Product Designer', 'United Arab Emirates', 1000000, 'Figma',
       'Applied 3 days ago', '../../../assets/unsplash_5MlBMYDsGBY.svg'),
       
       new application(3, 'Total Company', 'intermediate Product Designer', 'United States', 1000000, 'Figma',
       'Applied 3 days ago', '../../../assets/unsplash_lVVs5skyWoo.png'),

       new application(4, 'Sinkamore Company', 'junior Level Product Designer', 'England', 1000000, 'Figma',
       'Applied 3 days ago', '../../../assets/unsplash_PuhUJ3Cgdew.svg'),

       new application(5, 'Cheveron Company', 'junior Level Product Designer', 'Nigeria', 1000000, 'Figma',
       'Applied 3 days ago', '../../../assets/unsplash_qjpbN7RrfmA.svg'),

       new application(6, 'Chivita Company', 'Senior Level Product Designer', 'Nigeria', 1000000, 'Figma',
       'Applied 3 days ago', '../../../assets/unsplash_qjpbN7RrfmA.svg'),

       new application(7, 'Chess Company', 'intermediate Product Designer', 'United Arab Emirates', 1000000, 'Figma',
       'Applied 3 days ago', '../../../assets/unsplash_qjpbN7RrfmA.svg'),

       new application(8, 'Angular Company', 'Senior Level Product Designer', 'United states', 1000000, 'Figma',
       'Applied 3 days ago', '../../../assets/unsplash_qjpbN7RrfmA.svg'),

       new application(9, 'Bingo Company', 'junior Level Product Designer', 'United Arab Emirates', 1000000, 'Figma',
       'Applied 3 days ago', '../../../assets/unsplash_qjpbN7RrfmA.svg'),

       new application(10, 'Berger Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, 'Figma',
       'Applied 3 days ago', '../../../assets/unsplash_qjpbN7RrfmA.svg'),

       new application(11, 'Software Company', 'intermediate Product Designer', 'England', 1000000, 'Figma',
       'Applied 3 days ago', '../../../assets/unsplash_qjpbN7RrfmA.svg'),

       new application(12, 'Silkway Company', 'Senior Level Product Designer', 'England', 1000000, 'Figma',
       'Applied 3 days ago', '../../../assets/unsplash_qjpbN7RrfmA.svg'),

       new application(13, 'Trust Company', 'junior Level Product Designer', 'Nigeria', 1000000, 'Figma',
       'Applied 3 days ago', '../../../assets/unsplash_qjpbN7RrfmA.svg'),

       new application(14, 'Tech Company', 'junior Level Product Designer', 'United Arab Emirates', 1000000, 'Figma',
       'Applied 3 days ago', '../../../assets/unsplash_qjpbN7RrfmA.svg'),

       new application(15, 'Bienvu Company', 'intermediate Product Designer', 'United states', 1000000, 'Figma',
       'Applied 3 days ago', '../../../assets/unsplash_qjpbN7RrfmA.svg') 
    ];
    constructor() {}

    ngOnInit(){

    }

    searchText: string = ''

    onSearchTextEntered(searchValue: any){
      console.log(this.searchText);
       this.searchText = searchValue;
    }
}
