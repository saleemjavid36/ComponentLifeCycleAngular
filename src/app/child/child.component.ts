import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,ContentChild,DoCheck,Input,OnChanges,OnDestroy,OnInit, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
  counter=0;
  interval:any;

  @Input()
  channelName=''

 @ContentChild('projectedContent') projectedContent:any

  constructor(){
    console.log('Child Constructor is called')
  }
  ngOnDestroy(){
    console.log('Child OnDestroy is called')
    // clearInterval(this.interval)
  }
  ngOnInit():void{
    console.log('Child OnInit is called')
    console.log(' OnInit -' + this.projectedContent)

    //this is only for ngOnDestroy Hooks explaination
    // this.interval=setInterval(()=>{
    //   this.counter=this.counter+1
    //   console.log(this.counter)
    // },1000);  

  }

  ngDoCheck(){
    console.log('Child DoCheck is called')
    console.log(' DoCheck -' + this.projectedContent)
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes)
    console.log('Child OnChanges  is called')
    console.log(' OnChanges -' + this.projectedContent)
  }
  
  ngAfterContentInit(){
    console.log('in After Content Init')
    console.log(' After contennt Init -' + this.projectedContent)
  }
  
  ngAfterContentChecked() {
    console.log(' In After Content Checked')
    
  }
  
  ngAfterViewInit() {
    console.log(' In After View Init')
  }
  
  ngAfterViewChecked() {
    console.log(' In After View Cheked')
    
  }
}
