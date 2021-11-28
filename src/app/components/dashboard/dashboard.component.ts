import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, ComponentFactoryResolver, HostListener, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { InnerComponent } from './inner-component/inner.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  src: any;
  
  @ViewChild('iframe', { static: false }) iframe!: ElementRef;
  firstInput = 5;
  doc: any;
  compRef: ComponentRef<InnerComponent>;


  constructor() {
  }
  
  // @HostListener('window:blur', ['$event'])
  // onWindowBlur(event: any): void {
  //   console.log('iframe clicked');
  //   console.log(event);
  //   console.log("hithere"+this.myFrame);

  // }
  ngOnInit(): void {
  }
  click(){
    console.log("Went into click function")
  }
  



 
}


function InnerComponent(InnerComponent: any) {
  throw new Error('Function not implemented.');
}

