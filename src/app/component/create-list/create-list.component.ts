import { Component, OnInit } from '@angular/core';
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

  nameOfList: string;
  groceryStoreName: string;
  //listId: number;

  constructor(private router: Router, private viewListsService: ViewListsServiceService) { }
  
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
    this.newList.nameOfList = this.newlistgroup.get('nameOfList').value;
    this.newList.groceryStoreName = this.newlistgroup.get('groceryStoreName').value;
    console.log(this.newList);
    this.viewListsService.postList(this.newList).subscribe(
      response => {
      }, error => {
      }
    )
  }

}
