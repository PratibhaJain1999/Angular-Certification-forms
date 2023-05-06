import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'certification-exam';
  formsTabSelected='';
<<<<<<< HEAD
  newProject=false
  newProjecttt:any=[];
  addGridList=[]
  gridFormOpen:any=[]
  // clkGrid=false
  tabSelected='';
 
  projectListArray:any
  projectAdded: any;
=======
 
  tabSelected='';
  theProjectListArray: any;
  addList:any
>>>>>>> 73baabb41d6de6dadf2727d158f7ec3cbc273ba8

  navigateTab(event:any){
 console.log(event);
 this.tabSelected=event;
  }
 
  dataFetched(data:any){
    this.theProjectListArray=data
    this.tabSelected='grid-list';

  }

 
 


<<<<<<< HEAD
}

dataFetched(data: any) {
  this.projectListArray = data;
  this.tabSelected = 'grid-list';
}

gridListbtn(data:any) {
  this.projectAdded = data;
}
=======

  addGridList(addData:any){

  console.log(addData);
  this.addList=addData
>>>>>>> 73baabb41d6de6dadf2727d158f7ec3cbc273ba8
  
}

}