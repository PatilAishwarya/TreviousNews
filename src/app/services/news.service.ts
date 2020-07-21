import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiKey = '2625d7563ba24a90ba33d73a76a70851';

  constructor(private http : HttpClient) { }

  getArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=' + this.apiKey);
  }

  getArticlesByCategory(category : string){
    return this.http.get('https://newsapi.org/v2/everything?q='+ category +'&apiKey=' + this.apiKey);
  }
}
