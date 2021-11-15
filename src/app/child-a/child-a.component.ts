import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css'],
})
export class ChildAComponent implements OnInit {
  constructor() {}

  lunacontroladora = new FormControl('');

  updateName() {
    this.lunacontroladora.setValue('Nancy');
  }


  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  
  onSubmit(){
    console.log(this.profileForm.value);
  }

  ngOnInit(): void {}
}
