import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AppservicesService } from '../appservices.service';
import { GridListService } from '../grid-list/grid-list.service';
import { projectModel } from '../project-form/project model';
import { DatastorageService } from '../shared/datastorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() tabComponent = new EventEmitter();
  // @Output() newProjectBtn = new EventEmitter();
  @Output() newProjectEvent = new EventEmitter()
  @Output() gridListView = new EventEmitter();
  @Output() dataFetched = new EventEmitter()
  @Output() gridListbtn = new EventEmitter()
  @Input() saveDisable: any;
  @ViewChild('addForm') addForm!: NgForm
  showModal = false;
  newProjectAdd: any
  saveDisabled = true;
  listFormArray: any = [{
  }]
  gridlist = true;
  createProjectt = false
  constructor(private datastorage:DatastorageService, private appServ: AppservicesService, private http: HttpClient) {
  }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
  }
  showTab(tab: any) {
    this.tabComponent.emit(tab);
  }
  saveProject() {
  }
  closeModal() {
  }
  formAdded(addForm: projectModel) {
    console.log(addForm)
    this.newProjectAdd = new projectModel(this.addForm.value.post_id, this.addForm.value.name, this.addForm.value.email, this.addForm.value.body, this.addForm.value.coverimg,);
    this.gridListbtn.emit(this.newProjectAdd);
    this.addForm.reset();
    setTimeout(() => {
      this.closeBtn()
    }, 200);

    
  }
  gridList() {
  }
  closeBtn() {
    this.showModal = false
  }
  createProject() {
    this.showModal = true
    // this.gridListView.emit(true)
  }
  saveData() {
    this.createProjectt = true
    if (this.listFormArray.length > 0) {
      this.saveDisabled = false;}
    this.appServ.saveGridList(this.listFormArray);

    
   
    }
  
  fetchData(){
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
       
            this.appServ.getGridList().subscribe(res =>{
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
    )}}

