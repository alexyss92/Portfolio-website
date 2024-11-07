import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-datapicker',
  standalone: true,
  imports: [CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './datapicker.component.html',
  styleUrls: ['./datapicker.component.css']
})
export class DatapickerComponent {
  form  = this.fb.nonNullable.group({
    start: new FormControl(''),
    end: new FormControl('')
})

constructor(private fb: FormBuilder){}

send() {
  console.log('primo valore'+this.form.get('start')?.value);
  console.log('secondo valore'+this.form.get('end')?.value);
}
}
