import { GroceryList } from "./list";

export class GroceryItem {

    itemId:number;
    itemName: string;
    itemCost:number;
    itemType: string;
    //gListId: number;
    gList: GroceryList
}