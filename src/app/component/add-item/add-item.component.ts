import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GroceryItem } from 'src/app/model/item';
import { ViewListsServiceService } from 'src/app/service/view-lists-service.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  itemId:number;
  itemName: string;
  itemCost:number;

  constructor(private router: Router, private viewListsService: ViewListsServiceService) { }

  ngOnInit(): void {
  }

  newItem: GroceryItem = {
    'itemId': 0,
    'itemName': '',
    'itemCost' : 0,
    'itemType': '',
    'gListId': 0,
    'gList': null
  };

  newitemgroup = new FormGroup({
    itemName: new FormControl(''),
    itemCost: new FormControl(''),
    itemType: new FormControl('')
  })

  createItem(itemGroup: FormGroup): void {
    this.newItem.itemName = this.newitemgroup.get('itemName').value;
    this.newItem.itemCost = this.newitemgroup.get('itemCost').value;
    this.newItem.itemType = this.newitemgroup.get('itemType').value;
    this.newItem.gListId = parseInt(localStorage.getItem ("groceryListId"));
    console.log(this.newItem);
    this.viewListsService.postItem(this.newItem).subscribe(
      response => {
      }, error => {
      }
    )
  }



}
