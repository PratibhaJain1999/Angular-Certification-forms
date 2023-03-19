import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AppservicesService } from '../appservices.service';
import { GridListService } from '../grid-list/grid-list.service';
import { projectModel } from '../project-form/project model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()tabComponent=new EventEmitter();
  @Output()newProjectBtn=new EventEmitter();
  @Output()newProjectEvent=new EventEmitter()
  
  @Output() gridListView=new EventEmitter()
 
@ViewChild ('addForm')addForm!:NgForm
  showModal=false;
  newProjectAdd:any
 
  listFormArray:any=[{
  }]
 
  gridlist=true
  @Output() gridListbtn=new EventEmitter()
// 

  constructor( private gridListServ:GridListService,appServ:AppservicesService, private http:HttpClient) { 
  }

  ngOnInit(): void {
    
  }
 

  showTab(tab:any){
    this.tabComponent.emit(tab);



  }
  saveProject(){


  }
  closeModal(){

  }
  formAdded(addForm:NgForm){
    console.log(addForm)
    this.newProjectAdd=new projectModel(  this.addForm.value.post_id,this.addForm.value.name, this.addForm.value.email,this.addForm.value.body,this.addForm.value.coverimg,);
    this.gridListbtn.emit(this.newProjectAdd);
    this.http.post('https://certification-forms-default-rtdb.firebaseio.com/addform.json',addForm).subscribe(rest=>{
    rest
    }
    

    
    )}
  
    
  
  


  gridList(){
    // this.gridListt=true;
    // this.gridEventt.emit('mndfkjewr')

   
  }
  closeBtn(){
    this.showModal=false
  }
 
  createProject(){
this.showModal=true

this.gridListView.emit(true)

// this.gridListt=false

    
  }
  saveData(){

  }
 
fetchData()

{
  this.newProjectEvent.emit(true)
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Default Project!',
    cancelButtonText:'From Database'
  }).then((result) => {
    if (result.isConfirmed) {
      this.http.get('https://gorest.co.in/public/v2/comments').subscribe(res=>{
  this.listFormArray=res
})
     
        Swal.fire(
          'success!',
          'Your file has been added.',
          'success'
        )}
        else{
          this.http.post('https://certification-forms-default-rtdb.firebaseio.com/listarray.json',this.listFormArray).subscribe(responsiveData=>{
            this.listFormArray=responsiveData
                  }          )}
        // const listOfArray=this.gridListServ.getList();
        // this.http.post('https://certification-forms-default-rtdb.firebaseio.com/listarray.json',listOfArray).subscribe(responsiveData=>{
  
        // })
        
        // else{
        
        //     this.http.get('https://certification-forms-default-rtdb.firebaseio.com/listarray.json').subscribe(responsiveData=>{
        //     this.gridListServ.setListValue(responsiveData);
        //     this.gridListServ.getListVlaue().subscribe(res=>{
        //       this.listFormArray=res
        //     })
        //     })
        // }
      })
    
    
    
   
}



}
