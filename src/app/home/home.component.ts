import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name='to be changed'; 
  searchText='';

  // click(){
  //   console.warn(this.name);    
  // }

  count=1;
  stock=5;
  adddisable=false;
  subdisable=false;

  constructor(private route:Router){

  }


  onLoadServers(id:number){
    this.route.navigate(['/servers',5,'edit'], {queryParams:{allowedit:'1'},fragment:'loading'});
    }
    onNameChange(event:any){
      this.name=event.target.value;      
    }
    onadd(){
        this.count++;
      }    
        
    onsub(){ 
      this.count--;
      }

    
    
 
    

    
}
