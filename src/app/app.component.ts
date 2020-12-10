import { Component } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { FormControl, FormGroup, FormBuilder ,FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'app';
  exampleForm = new FormGroup ({
    firstName: new FormControl(),
    lastName: new FormControl(),
    alias: new FormArray([ new FormControl("")])
  });
  

 
}
