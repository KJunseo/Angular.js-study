import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../section/section.component';
import { StopwatchModule } from './stopwatch/stopwatch.module';
import { RouterModule, Routes } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ClockComponent } from './clock/clock.component';


const routes : Routes = [
   {  //path값이 stopwatch일 때 StopwatchComponent를 보여라
     path: 'stopwatch',
     component: StopwatchComponent
   },
   {  //path값이 clock일 때 ClockComponent를 보여라
    path: 'clock',
    component: ClockComponent
  }
]

@NgModule({
  declarations: [
    SectionComponent,
    ClockComponent
    
  ],
  imports: [
    CommonModule,
    StopwatchModule,
    RouterModule.forChild(routes) //위의 const routes 값을 라우터모듈에 등록 사용하기 이해 exports도 시켜줘야함
  ],
  exports: [
    SectionComponent,
    RouterModule
  ]
})
export class SectionModule { }
