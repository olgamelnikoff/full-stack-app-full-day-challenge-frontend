import { Component, OnInit } from '@angular/core';
import { GroceryList } from 'src/app/model/list';
import { ViewListsServiceService } from 'src/app/service/view-lists-service.service';

@Component({
  selector: 'app-view-lists',
  templateUrl: './view-lists.component.html',
  styleUrls: ['./view-lists.component.css']
})
export class ViewListsComponent implements OnInit {

  groceryLists : GroceryList [];

  //private gListServ: ViewListService;

  constructor(private gListServ: ViewListsServiceService) { }

  ngOnInit(): void {
    this.getAllGroceryLists();
  }

  getAllGroceryLists(): void {
    let thisArray: GroceryList[];
    this.gListServ.retrieveAllGroceryLists().subscribe(
      response => {
        console.log(response);
        thisArray = Object.values(response);
        this.groceryLists = thisArray;
      }
    )
  }

  deleteList(groceryList: GroceryList) {
    console.log(groceryList);
    this.gListServ.deleteList(groceryList)
      .subscribe(data => {
      })
  }
}
