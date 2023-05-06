import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { projectModel } from './project model';
import { AppservicesService } from '../appservices.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  fetch:any
 

  @Output() dataFetched = new EventEmitter();
  @Output()newProjectEvent = new EventEmitter();
  listFormArray:any=[]
  saveDisabled = true;


  constructor( private appServ:AppservicesService) { }

  ngOnInit(): void {
  }
  
  clearAll(){

  }

  Delete(){}
  fetchData(fetch:any){
    console.log(fetch)

    this.newProjectEvent.emit(true)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Default Project!',
      cancelButtonText: 'From Database'
    }).then((result) => {
      if (result.isConfirmed) {
       
            this.appServ.fetchGridList().subscribe(res =>{
              this.listFormArray=res
             
                if (this.listFormArray.length > 0) {
                this.saveDisabled = false;
                this.dataFetched.emit(res);

              }
            
    
            Swal.fire(
              'success!',
              'Your file has been added.',
              'success'
            )
            
 
      })}
      else {
        this.appServ.fetchGridList().subscribe(response =>{
          this.listFormArray=response;
          console.log(response)
        })
          if (this.listFormArray.length > 0) {
            this.saveDisabled = false;
            this.dataFetched.emit();


          }

        }
      }
    )
  }

  }

  