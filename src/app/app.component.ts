import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

interface FormModel {
  title: FormControl<string | null>;
  name: FormGroup<{
    firstName: FormControl<string | null>;
    lastName: FormControl<string | null>;
  }>;
  interest: FormArray<FormControl<string | null>>;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class AppComponent {
  form = new FormGroup<FormModel>({
    title: new FormControl('This is title'),
    name: new FormGroup({
      firstName: new FormControl('Will'),
      lastName: new FormControl('Huang'),
    }),
    interest: new FormArray([
      new FormControl('HTML'),
      new FormControl('Angular'),
    ]),
  });
}
