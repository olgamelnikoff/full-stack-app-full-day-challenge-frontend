import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ViewListsComponent } from './component/view-lists/view-lists.component';
import { CreateListComponent } from './component/create-list/create-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddItemComponent } from './component/add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewListsComponent,
    CreateListComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   FormsModule, ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'grocery-lists/new', component: CreateListComponent},
      {path: 'grocery-lists/all', component: ViewListsComponent},
      {path: 'grocery-lists/item/new', component: AddItemComponent},
      {path: '**', redirectTo : 'grocery-lists/all'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
