import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  // job: {id: number, name: string};

  constructor(private Route: ActivatedRoute){}

  ngOnInit(){
    // this.job={
    //   id: this.route.snapshot.params['id']
    //   name: this.Route.snapshot.params['name']
    // };
  }
}
