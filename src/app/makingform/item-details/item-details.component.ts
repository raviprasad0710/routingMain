import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {

  @ViewChild('modal')modal:ElementRef;
  @Output()closeDetail:EventEmitter<any>=new EventEmitter<any>();

  clickButton(){
    this.modal.nativeElement.click();
    }   
    

}
