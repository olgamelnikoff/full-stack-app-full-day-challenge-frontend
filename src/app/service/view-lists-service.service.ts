import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GroceryList } from '../model/list';

@Injectable({
  providedIn: 'root'
})
export class ViewListsServiceService {

  httpOptions = { responseType: "text" as "json" }
  private allGroceryListsUrl = "http://localhost:9025/grocery-lists/all";
  private createNewListUrl = "http://localhost:9025/grocery-lists/new"
  private deleteListUrl = "http://localhost:9025/grocery-lists/new"

  constructor(private httpCli :HttpClient) { }

  retrieveAllGroceryLists(): Observable<GroceryList> {
    console.log(this.httpCli.get<GroceryList>(this.allGroceryListsUrl));
    return this.httpCli.get<GroceryList>(this.allGroceryListsUrl);
  }

  postList(newList:GroceryList): Observable<string>{
    console.log(newList);
    return this.httpCli.post<string>(this.createNewListUrl, JSON.stringify(newList), {
        headers: new HttpHeaders({
            'Content-Type':'application/json'
        }),
        responseType: 'text' as 'json'
    });
  }

  deleteList(list:GroceryList): Observable<string> {
    let listId = list.listId;
    return this.httpCli.delete<string>(`http://localhost:9025/grocery-lists/${listId}`, this.httpOptions);
  }
}
