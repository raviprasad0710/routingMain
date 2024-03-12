import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  constructor(private router:Router,private route:ActivatedRoute){

  }

  anything='next time'

  practiceparent='done'

  allParent=100;
  inStockParent=40;
  outStockParent=this.allParent-this.inStockParent

  @ViewChild('a')a:any;
  viewchild(){
    console.log(this.a.nativeElement.value);
    
  }

  outputFinal(outputPracticeSend){
   alert(outputPracticeSend)
    
  }
  

  // onReload(){
  //   this.router.navigate(['/'])
  // }

  greet(name:any){
    alert('hello '+name);
    
  }

  loadquery(){
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    
  }
}
