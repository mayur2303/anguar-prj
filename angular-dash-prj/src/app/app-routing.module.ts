import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DashCompComponent} from "./dash-comp/dash-comp.component";
import {AddFormCompComponent} from "./add-form-comp/add-form-comp.component";
import {TreeCompComponent} from "./tree-comp/tree-comp.component";
import {TableCompComponent} from "./table-comp/table-comp.component";
import {DragDropCompComponent} from "./drag-drop-comp/drag-drop-comp.component";
import {TextTemplateComponent} from "./text-template/text-template.component";


const routes: Routes = [
  {path:'dashboard', component:DashCompComponent},
  {path:'form', component:AddFormCompComponent},
  {path:'tree', component:TreeCompComponent},
  {path:'table', component:TableCompComponent},
  {path:'dragndrop', component:DragDropCompComponent},
  {path:'editor', component:TextTemplateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
