import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css',
  "css/ionicons.min.css",
  "css/bootstrap/bootstrap.min.css",
  "css/font-awesome.min.css",
  "css/main.css",
  "css/style.css",
  "css/responsive.css"]
})
export class ProfileComponent implements OnInit {

  prn: string;
  student : any;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.prn = this.route.snapshot.queryParamMap.get('studentId');
    this.http.post("http://localhost:5000/getStudent",{studentID:this.prn}).subscribe((data:any[])=>{
      console.log(data);
      this.student=data;
      console.log(this.student);
    })
  };


  openResume(){
    this.router.navigate(['/resume'],{queryParams:{prn:this.student[0].prn}});
  }

}
