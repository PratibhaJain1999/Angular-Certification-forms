import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'certification-exam';
  formsTabSelected='';
  newProject=false
  newProjecttt:any=[];
  addGridList=[]
  gridFormOpen:any=[]
  clkGrid=false
  tabSelected='';
  showGridViewEvent:any=[]
  addGridListt='hello'

  navigateTab(event:any){
 console.log(event);
 this.tabSelected=event;
  }
  newProjectEventt(event:any){
  console.log(event);
  

  }

 
  formsTabs(event:any)
{
this.formsTabSelected=event
} 
newGridList(event:any)   {
  console.log(event)
  this.gridFormOpen=event
}
addNewProject(event:any){
  this.newProject=event
  this.newProjecttt=event

}
newProjectt(event:any){
  console.log('jmdbjyeg')
  this.newProjecttt=event


}
listcomponent(){
  this.clkGrid=true

}
  
   
}