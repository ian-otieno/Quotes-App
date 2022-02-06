import { Component, OnInit } from '@angular/core';
import{ Quotes } from '../quotes'


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes("Ian Otieno", "Bill Gates", "The Internet is becoming the town square for the global village tomorrow.", new Date(2021, 11,31), 0, 0, new Date()),
    new Quotes ("Paul Magadi", "Confucius", "The object of the  superior man is truth.", new Date(2022,0,15), 0 , 0, new Date()),
    new Quotes("Nancy Mwakishau", "Albert Einstein", "Intellectuals solve problems, geniuses prevent them.", new Date(2010,7,20), 0, 0, new Date()),
    new Quotes("Addline Onyango", "Nelson Mandela", "Education is the most powerful weapon which you can use to change the world.", new Date(2016,4,17), 0, 0, new Date()),
    new Quotes("Denis Kahangi", "Aesop", "Never trust the advice of a man in difficulties.", new Date(2019,0,1), 0, 0, new Date()),
    new Quotes ("Pascal Owili", "Abraham Lincoln", "A house devided against itself cannot stand.", new Date(2020,1,15), 0 , 0, new Date())
 ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
