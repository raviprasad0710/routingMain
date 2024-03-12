import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/model/model.component';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css']
})
export class ChildFormComponent implements OnInit {

  @Output() EmitTaskData: EventEmitter<any> = new EventEmitter<Task>();


  @ViewChild('buttonToBeClicked') buttonToBeClicked: ElementRef;
  


  ngOnInit() {
  }

  clickButton(){
    this.buttonToBeClicked.nativeElement.click();
  }



  loadform = new FormGroup({
    f: new FormControl('', Validators.required),
    l: new FormControl('', Validators.required),
    e: new FormControl('', [Validators.email, Validators.required]),
    g: new FormControl('',Validators.required),
  })


  

  submitform() {
    this.EmitTaskData.emit(this.loadform.value)
    this.loadform.reset()

    // console.log(this.loadform.value);

    
}
closeForm(){
    this.loadform.reset()  
}



}
