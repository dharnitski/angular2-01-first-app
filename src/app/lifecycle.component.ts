import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{bindable}}</p>
    <p>{{boundParagraph.textContent}}</p>

  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() bindable = 1000;

  @ViewChild('boundParagraph') 
  boundContent: HTMLElement;

  @ContentChild('boundParent')  
  boundParent: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.log("ngOnInit");
  }

  ngOnChanges() {
    this.log("ngOnChanges");
  }

  ngDoCheck() {
    this.log("ngDoCheck");
  }

  ngAfterContentInit() {
    this.log("ngAfterContentInit");
    console.log(this.boundParent);
  }

  ngAfterContentChecked() {
    this.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    this.log("ngAfterViewInit");
    console.log(this.boundContent);
  }

  ngAfterViewChecked() {
    this.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    this.log("ngOnDestroy");
  }

  private log(hook: string) {
    console.log(hook);
  }
}
