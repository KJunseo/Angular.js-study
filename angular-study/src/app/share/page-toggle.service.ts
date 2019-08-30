import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StopwatchModule } from '../section/stopwatch/stopwatch.module';

@Injectable(//{
  //providedIn: StopwatchModule
  //providedIn: StopwatchComponent
//}
)
export class PageToggleService {

  public  routingCount =0;

  constructor(
    private router:Router
  ) { }

  goPage(target){
    this.routingCount++;
    this.router.navigateByUrl(target);

  }
}
