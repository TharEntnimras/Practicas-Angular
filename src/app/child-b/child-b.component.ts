import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css'],
})
export class ChildBComponent implements OnInit {
  nameInput = '';
  nameInput2 = '';

  constructor() {}

  ngOnInit(): void {}

  validationForm = new FormGroup({
    namecontroler: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  get namecontrolerget(){
    return this.validationForm.get('namecontroler');
  }
}
