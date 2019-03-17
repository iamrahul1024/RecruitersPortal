import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { saveAs } from 'file-saver/FileSaver';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(    private http: HttpClient,
    private route: ActivatedRoute,
    private router : Router,) { }

}
