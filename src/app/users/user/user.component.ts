import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{


  constructor(private routes:ActivatedRoute){}


  user:{
    id:number,name:string
  }

  ngOnInit(){
    this.user={
      id:this.routes.snapshot.params['id'],
      name:this.routes.snapshot.params['name']
    } ;   

   this.routes.params.subscribe(
      (paramss: Params)=>{
        this.user.id=paramss['id'],
        this.user.name=paramss['name']
      }
    );
  }
  

  
}
