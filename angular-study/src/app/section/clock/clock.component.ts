import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  timeString: string;

  constructor(
    private router: Router,  //타입을 반드시 적어주어야함. 
    private pageToggleService: PageToggleService
    ) { 

    //rxjs 문법이다. 
    interval(1000)
    .pipe(map(()=>{              //1초마다 파이프를 사용하여 map함수를 실행시킨다.  
      return moment().format('YYYY-MM-DD HH:mm:ss') //함수의 리턴값은 현재시간(moment)이다. 
    }))
    .subscribe(data=>{        //위에서 발생하는 데이터를 구독하고 있다가
      this.timeString=data;   //변화가 생기면 timeString에 매핑해준다.
    })
  }

  goStopwatch(){
    this.pageToggleService.goPage('/stopwatch');
  }

  ngOnInit() {
  }

}
