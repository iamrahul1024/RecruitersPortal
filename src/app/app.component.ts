import { Component } from '@angular/core';
import {FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  loginForm: FormGroup;
  title = 'RecruitersPortal';
  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        companyName: [''],
        key: [''],
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    console.log(this.f.companyName.value);
  }

}
