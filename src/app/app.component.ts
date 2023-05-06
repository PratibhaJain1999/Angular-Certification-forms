import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'certification-exam';
  formsTabSelected='';
 
  tabSelected='';
  theProjectListArray: any;
  addList:any

  navigateTab(event:any){
 console.log(event);
 this.tabSelected=event;
  }
 
  dataFetched(data:any){
    this.theProjectListArray=data
    this.tabSelected='grid-list';

  }

 
 



  addGridList(addData:any){

  console.log(addData);
  this.addList=addData
  
}

}