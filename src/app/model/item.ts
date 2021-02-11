import { GroceryList } from "./list";

export class GroceryItem {

    itemId:number;
    itemName: string;
    itemCost:number;
    itemType: string;
    gListId: number;
    gList: GroceryList

    constructor(
        itemName: string,
        itemCost: number,
        itemType: string,
        gListId: number){
    this.itemName = itemName;
    this.itemCost = itemCost;
    this.itemType = itemType;
    this.gListId = gListId;
    }
}