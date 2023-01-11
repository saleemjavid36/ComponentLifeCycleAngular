import { Component,DoCheck,OnChanges,OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges,DoCheck{
  isChild=true;
  channelName='';
  
  constructor(){
    console.log('Parent Constructure is called')
  }
  
  ngOnInit(): void {
    
    console.log('Parent ngOnInit  is called')
  }

  ngOnChanges(){
    console.log('Parent OnChanges  is called')
  }

  ngDoCheck(){
    console.log('Parent DoCheck is called')
  }

  toggleChild(){
    this.isChild=!this.isChild
  }

}
