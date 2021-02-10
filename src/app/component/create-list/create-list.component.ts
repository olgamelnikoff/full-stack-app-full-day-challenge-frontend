import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GroceryList } from 'src/app/model/list';
import { ViewListsServiceService } from 'src/app/service/view-lists-service.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  pageTitle = "Create New Grocery List";

  constructor(private router: Router, private viewListsService: ViewListsServiceService) { }

  nameOfList: string;
  groceryStoreName: string;
  //listId: number;
  
  newList: GroceryList = {
    'listId': 0,
    'nameOfList': '',
    'groceryStoreName': ''
  };

  newlistgroup = new FormGroup({
    nameOfList: new FormControl(''),
    groceryStoreName: new FormControl('')
  })

  ngOnInit(): void {
  }

  createList(listGroup: FormGroup): void {
    this.newList.nameOfList = this.nameOfList;
    this.newList.groceryStoreName = this.groceryStoreName;
    console.log(this.newList);
    this.viewListsService.postList(this.newList).subscribe(
      response => {
        console.log(response);
        window.alert("A new list was created");
      }, error => {
        window.alert("Could not create a new list");
      }
    )
  }

}
