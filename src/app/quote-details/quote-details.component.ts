import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote!: Quotes;
  @Output() isRead = new EventEmitter<boolean>();

  quoteDelete(read:boolean){
    this.isRead.emit(read);
  }
  upvote(){
    this.quote.upvote=this.quote.upvote+1;
  }
  downvote(){
    this.quote.downvote=this.quote.downvote-1;
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
