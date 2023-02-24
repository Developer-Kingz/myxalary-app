import { Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy{
  application: {id: number};
  paramsSubscription: Subscription;

  constructor(private Route: ActivatedRoute){}

  ngOnInit(){
    this.application ={
      id: this.Route.snapshot.params['id']
    }
    this.Route.params
    .subscribe(
      (params: Params) => {
        this.application.id = params['id']
      }
    )
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }
}
