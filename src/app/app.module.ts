import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddFormCompComponent } from './add-form-comp/add-form-comp.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { TableCompComponent } from './table-comp/table-comp.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashCompComponent } from './dash-comp/dash-comp.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { TreeCompComponent } from './tree-comp/tree-comp.component';
import { MatTreeModule } from '@angular/material/tree';
import { NavCompComponent } from './nav-comp/nav-comp.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DragDropCompComponent } from './drag-drop-comp/drag-drop-comp.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HomeComponent } from './home/home.component';
import {MatExpansionModule} from "@angular/material";
import { TextTemplateComponent } from './text-template/text-template.component';
import {RichTextEditorModule} from "@syncfusion/ej2-angular-richtexteditor";
import {ListBoxAllModule} from "@syncfusion/ej2-angular-dropdowns";
import {MatTabsModule} from '@angular/material/tabs';
import {TabModule} from "@syncfusion/ej2-angular-navigations";

@NgModule({
  declarations: [
    AppComponent,
    AddFormCompComponent,
    TableCompComponent,
    DashCompComponent,
    TreeCompComponent,
    NavCompComponent,
    DragDropCompComponent,
    HomeComponent,
    TextTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatTreeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    DragDropModule,
    MatExpansionModule,
    ListBoxAllModule,
    RichTextEditorModule,
    MatTabsModule,
    TabModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
