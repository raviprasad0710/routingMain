import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Task } from '../model/model.component';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { devOnlyGuardedExpression } from '@angular/compiler';
// import { ServicesService } from '../service/services.service';
import { ChildActivationStart } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';




@Component({
  selector: 'app-makingform',
  templateUrl: './makingform.component.html',
  styleUrls: ['./makingform.component.css']
})
export class MakingformComponent implements OnInit {

  newForm = new FormGroup({
    f: new FormControl('', Validators.required),
    l: new FormControl('', Validators.required),
    e: new FormControl('', [Validators.email, Validators.required]),
    g: new FormControl('',Validators.required),
  })
  empid: Task = new Task();

  ngOnInit() {
    this.fetchAllTasks()
  }
  allTasks: Task[] = []
  showDetails = true;
  employeobj: any;

  showLoader: boolean = false;

 

  constructor(private http: HttpClient,public dialog: MatDialog) { }

  @ViewChild('child') child;
  @ViewChild('childd') childd;
  @ViewChild('testtest') testtest: ElementRef;

  clicked() {
    this.child.clickButton();
  }

  itemDetailsClicked() {
    this.childd.clickButton()
    // this.showDetails=true
  }

  fetchAllTasks() {
    this.showLoader = true;
    this.http.get<{ [key: string]: Task }>('https://angularthirdapi-default-rtdb.firebaseio.com/task.json')
      .pipe(map((res) => {


        let tasks = [];
        for (let key in res){
          if (res.hasOwnProperty(key)) {
            tasks.push({ ...res[key], id: key });
          }
        }

        return tasks

      }))

      .subscribe((tasks) => {
        console.log(tasks)
        this.allTasks = tasks;
        this.showLoader = false;

      })
  }



  CreateTask(loadform) {
    this.http.post<{ [key: string]: Task }>('https://angularthirdapi-default-rtdb.firebaseio.com/task.json', loadform)
      .subscribe((res) => {
        this.fetchAllTasks()
      })
    // setTimeout(this.alertFunc,3000);
  };

  alertFunc() {
    alert('ok')
  }






  fetchAllTask() {
    this.fetchAllTasks();

  }

  deleteRecord(id: string) {
    this.http.delete('https://angularthirdapi-default-rtdb.firebaseio.com/task/' + id + '.json')
      .subscribe(() => {
        this.fetchAllTasks()
      })
  }

  clearAllMembers() {
    this.http.delete('https://angularthirdapi-default-rtdb.firebaseio.com/task.json')
      .subscribe(() => {
        this.fetchAllTasks()
      })
  }

  edit(item) {
    this.empid.id = item.id;
    this.newForm.controls['f'].setValue(item.f);
    this.newForm.controls['l'].setValue(item.l);
    this.newForm.controls['e'].setValue(item.e);
    this.newForm.controls['g'].setValue(item.g);
  }

  updateRecord() {

    this.http.put('https://angularthirdapi-default-rtdb.firebaseio.com/task/' + this.empid.id + '.json', this.newForm.value)
      .subscribe(() => {

        // document.getElementById("close").click();
        this.fetchAllTasks()
      })

  }

  openDialog(item: any){
    let dialogRef = MatDialogRef<MakingformComponent>
    this.dialog.open(DialogComponentComponent,{height: '60%',width: '40%',data: item});
  }






}


