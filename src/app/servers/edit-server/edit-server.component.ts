import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit  {

  input='';

  formvalue=new FormGroup({
    firstName:new FormControl('',Validators.required),
    email:new FormControl('',Validators.email),
    password:new FormControl('',Validators.required)
  })


  constructor(private routes:ActivatedRoute){
  }

  @ViewChild('a')a;

  ngOnInit(){
    console.log(this.routes.snapshot.queryParams);
    console.log(this.routes.snapshot.fragment);
    this.routes.queryParams.subscribe();
    this.routes.fragment.subscribe();  
  }

showinput(){
  console.log(this.a.nativeElement.value);  
}

submit(){
  console.log(this.formvalue.value);
  }





}
