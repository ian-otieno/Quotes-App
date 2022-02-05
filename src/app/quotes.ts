export class Quotes {
    showQuote:boolean;
    constructor(public name:string, public author:string, public quote:string, public postDate:Date, public upvote:number, public downvote:number, public currentDate:Date){
        this.showQuote=false
    }
}
