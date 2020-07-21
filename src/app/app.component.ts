import { Component } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trevious News';

  articles : Array<any>;
  label : string = "NEWS";

  constructor(private newsService : NewsService){ }

  ngOnInit() {
    this.getArticles();
  }

  // To get all articles
  getArticles(){
    this.label = "NEWS";
    this.newsService.getArticles().subscribe( data => this.articles = data['articles']);
  }

  // To get articles by category / search by any random text
  getArticleByCategory(category : string){
    this.label = category.toLocaleUpperCase();
    this.newsService.getArticlesByCategory(category).subscribe( data => this.articles = data['articles']);
  }

  // To show time span - how much time ago article is published
  calculateDiff(sentDate) {
    var date1:any = new Date(sentDate);
    var date2:any = new Date();
    let diffInMs: number = Date.parse(date2) - Date.parse(date1);
    if(diffInMs > 60)
    {
      let diffInHours: number = Math.floor(diffInMs / 1000 / 60 / 60);
      if(diffInHours > 24)
      {
        let diffInDays : number = Math.floor(diffInMs / 1000 / 60 / 60 / 24);
        return diffInDays + ' days';
      }
      else
        return diffInHours + ' hrs';
    }
    else{
      return diffInMs + ' mins';
    }
  } 
}

  
