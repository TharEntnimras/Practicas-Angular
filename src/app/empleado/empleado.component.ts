import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LogService } from '../log.service';

import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  @Input() size!: number;  

  @Output() sizeChange = new EventEmitter<number>();

  constructor(private log: LogService, private route:ActivatedRoute) {

   }
  
  

  ngOnInit(): void {  
    this.log.logMessage('Holaaa Dependency Injection!!');
    alert(this.route.snapshot.paramMap.get('id'));
  }

  showText = false;
  toggleText(): void {
    this.showText = !this.showText;
  }
   
  dec(){
    this.resize(-1);
  }
  inc(){
    this.resize(+1);
  }
  resize(delta: number){
    this.size = this.size+delta;
    this.sizeChange.emit(this.size);
  }

  callPhone(phone: string){
      console.log(phone);
  }

  estrellita = [
    { name: 'Juana'},
    { name: 'John'},
    { name: 'Monika'},
  ]
  

  item = {name: 'Polo'};




}
       