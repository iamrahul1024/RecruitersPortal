import { MyServiceService } from './my-service.service';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { saveAs } from 'file-saver/FileSaver';
import * as AWS from 'aws-sdk';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  prn:143;
  link;
  data: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router : Router,
    private sanitizer: DomSanitizer,
    private myservice : MyServiceService
  ) { }
  pdfSrc: any;
  public loading = false;
  ngOnInit() {

      const url = 'http://localhost:5000/getPDF';
      this.http.get(url,{responseType:'json'}).subscribe((response:any)=>{
      this.link = response.Body;
      });

      this.loading = true;
    };
    
    callBackFn(event){
      this.loading=false;
    }

}


