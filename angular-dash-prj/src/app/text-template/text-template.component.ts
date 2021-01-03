import {Component, OnInit, ViewChild} from '@angular/core';
import {
  HtmlEditorService,
  ImageService,
  LinkService,
  RichTextEditorComponent,
  ToolbarService
} from "@syncfusion/ej2-angular-richtexteditor";

@Component({
  selector: 'app-text-template',
  templateUrl: './text-template.component.html',
  styleUrls: ['./text-template.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class TextTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private listboxEle: HTMLElement;
  private editArea: HTMLElement;
  private editAreasms: HTMLElement;
  private editAreaPush: HTMLElement;

  private dragEleContent: string;

  @ViewChild('RTE', null) public rteObj: RichTextEditorComponent ;
  @ViewChild('RTE1', null) public rteObj1: RichTextEditorComponent ;
  @ViewChild('RTE2', null) public rteObj2: RichTextEditorComponent ;

  public data: { [key: string]: Object }[] = [
    {
      text: '${userName}',
      id: '01',
      "htmlAttributes": { draggable: true,class:"list-item" }
    },
    {
      text: '${add}',
      id: 'list-02',
      "htmlAttributes": { draggable: true,class:"list-item" }
    },
    {
      text: '$[{email}}',
      id: 'list-03',
      "htmlAttributes": { draggable: true,class:"list-item" }
    },{
      text: '#[{email}}',
      id: 'list-03',
      "htmlAttributes": { draggable: true,class:"list-item" }
    }
  ];

  onCreateEmail(): void {
    this.listboxEle = document.getElementById('listbox') as HTMLElement;
    this.editArea = document.getElementById('defaultRTE') as HTMLElement;
    console.log("Email:"+this.editArea);
    // Drop handler
    this.editArea.addEventListener("drop", this.dropHandler.bind(this));

    // DragStart event binding
    this.listboxEle.addEventListener("dragstart", function (e) {
      e.dataTransfer.setData("Text", (e.target as HTMLElement).innerText);
    });
  }

  onCreateSms(): void {
    this.listboxEle = document.getElementById('listbox') as HTMLElement;

    this.editAreasms = document.getElementById('RTESms') as HTMLElement;
    console.log("editAreasms:"+this.editAreasms);
    // Drop handler
    this.editAreasms.addEventListener("drop", this.dropHandlerSms.bind(this));

    // DragStart event binding
    this.listboxEle.addEventListener("dragstart", function (e) {
      e.dataTransfer.setData("Text", (e.target as HTMLElement).innerText);
    });
  }

  onCreatePush(): void {
    this.listboxEle = document.getElementById('listbox') as HTMLElement;
    this.editAreaPush = document.getElementById('RTEPush') as HTMLElement;
    console.log("editAreaPush:"+this.editAreaPush);
    // Drop handler
    this.editAreaPush.addEventListener("drop", this.dropHandlerPush.bind(this));

    // DragStart event binding
    this.listboxEle.addEventListener("dragstart", function (e) {
      e.dataTransfer.setData("Text", (e.target as HTMLElement).innerText);
    });
  }

  dropHandler(e: any): void {
    //Prevent browser default drop and drop action
    e.preventDefault();

    // Do drop if target is inside RTE edit area
    if (this.rteObj.inputElement.contains(e.target)) {
      let range: Range;

      if (this.rteObj.contentModule.getDocument().caretRangeFromPoint) {
        range = this.rteObj.contentModule.getDocument().caretRangeFromPoint(e.clientX, e.clientY);
      } else if (e.rangeParent) {
        range = this.rteObj.contentModule.getDocument().createRange();
        range.setStart(e.rangeParent, e.rangeOffset);
      }

      this.rteObj.selectRange(range);

      if (this.rteObj.formatter.getUndoRedoStack().length === 0) {
        this.rteObj.formatter.saveData();
      }

      let text: string = e.dataTransfer.getData('Text').replace(/\n/g, '').replace(/\r/g, '').replace(/\r\n/g, '');

      this.rteObj.executeCommand("insertHTML", "<span contenteditable='false'>&nbsp;<span class='e-badge e-badge-primary'>"+text+"</span>&nbsp;</span>");
      this.rteObj.formatter.saveData();
      this.rteObj.formatter.enableUndo(this.rteObj);

    }
  }

  dropHandlerSms(e: any): void {
    //Prevent browser default drop and drop action
    e.preventDefault();

    // Do drop if target is inside RTE edit area
    if (this.rteObj1.inputElement.contains(e.target)) {
      let range: Range;

      if (this.rteObj1.contentModule.getDocument().caretRangeFromPoint) {
        range = this.rteObj1.contentModule.getDocument().caretRangeFromPoint(e.clientX, e.clientY);
      } else if (e.rangeParent) {
        range = this.rteObj1.contentModule.getDocument().createRange();
        range.setStart(e.rangeParent, e.rangeOffset);
      }

      this.rteObj1.selectRange(range);

      if (this.rteObj1.formatter.getUndoRedoStack().length === 0) {
        this.rteObj1.formatter.saveData();
      }

      let text: string = e.dataTransfer.getData('Text').replace(/\n/g, '').replace(/\r/g, '').replace(/\r\n/g, '');

      this.rteObj1.executeCommand("insertHTML", "<span contenteditable='false'>&nbsp;<span class='e-badge e-badge-primary'>"+text+"</span>&nbsp;</span>");
      this.rteObj1.formatter.saveData();
      this.rteObj1.formatter.enableUndo(this.rteObj1);

    }
  }

  dropHandlerPush(e: any): void {
    //Prevent browser default drop and drop action
    e.preventDefault();

    // Do drop if target is inside RTE edit area
    if (this.rteObj2.inputElement.contains(e.target)) {
      let range: Range;

      if (this.rteObj2.contentModule.getDocument().caretRangeFromPoint) {
        range = this.rteObj2.contentModule.getDocument().caretRangeFromPoint(e.clientX, e.clientY);
      } else if (e.rangeParent) {
        range = this.rteObj2.contentModule.getDocument().createRange();
        range.setStart(e.rangeParent, e.rangeOffset);
      }

      this.rteObj2.selectRange(range);

      if (this.rteObj2.formatter.getUndoRedoStack().length === 0) {
        this.rteObj2.formatter.saveData();
      }

      let text: string = e.dataTransfer.getData('Text').replace(/\n/g, '').replace(/\r/g, '').replace(/\r\n/g, '');

      this.rteObj2.executeCommand("insertHTML", "<span contenteditable='false'>&nbsp;<span class='e-badge e-badge-primary'>"+text+"</span>&nbsp;</span>");
      this.rteObj2.formatter.saveData();
      this.rteObj2.formatter.enableUndo(this.rteObj2);

    }
  }
}
