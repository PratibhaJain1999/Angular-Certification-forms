import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { projectModel } from './project model';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
 

  @Output() projectForm=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  
  clearAll(){

  }

  Delete(){}

  }