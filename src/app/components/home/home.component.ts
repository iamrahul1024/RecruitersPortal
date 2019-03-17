import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
  "./css/util.css",
  "./css/main.css"

]
})
export class HomeComponent implements OnInit {
  
  constructor(   
    private http: HttpClient,
    private route: ActivatedRoute,
    private router : Router
    ) {
   }

   data: any;

   ngOnInit() {
     this.http.get("http://localhost:5000/getAllStudents").subscribe((data: any[])=>{
    console.log(data);
    this.data=data;
     })
  }

  studentSelect(prn){
    console.log(prn);
    this.router.navigate(['/profile'],{queryParams:{studentId:prn}});
  }



}
