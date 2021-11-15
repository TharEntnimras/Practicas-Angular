import { Component } from '@angular/core';
import { Pet } from './pet.model';
import { DataexteriorService } from './dataexterior.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dataService: DataexteriorService){

  }

  ngOnInit() {
    this.dataService.getData().subscribe((res)=>{
      console.log(res);
    })
  }
  title = 'test1';
  fontSizepx = 16;

  species = ['fish','cat','dog'];

  model = new Pet(1,'goldfish', this.species[0]);
  
  submited=false;

  onSubmit(){
    this.submited = true;
  }
}

