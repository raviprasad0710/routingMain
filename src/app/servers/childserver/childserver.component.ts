import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-childserver',
  templateUrl: './childserver.component.html',
  styleUrls: ['./childserver.component.css']
})
export class ChildserverComponent {

  @Input()product:{id:1,name:string}

  @Input()all='';
  @Input()instock='';
  @Input()outofstock='';

  @Input()practice='';

  @Output()outputPractice=new EventEmitter;
  
  @Output()goingout=new EventEmitter;

  name='evolution'
  outputPracticeSend='works'

  callParentGreet(){
    this.goingout.emit(this.name)
  }
  callOutputPractice(){
    this.outputPractice.emit(this.outputPracticeSend)
  }

}
