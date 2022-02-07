import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: any):number{
    let today:Date = new Date()
    let todayWithNoTime:any= new Date(today.getFullYear(), today.getMonth(), today.getDate())
    let dateDifference =Math.abs(value -todayWithNoTime);
    const secondsInDay=86400;
    var dateDifferenceSeconds= dateDifference*0.001
    var dateCounter = Math.floor(dateDifferenceSeconds/secondsInDay);
    if(dateCounter >=1 || value > todayWithNoTime){
      return dateCounter;
    }else {
      return 0;
    }
  
  }

}