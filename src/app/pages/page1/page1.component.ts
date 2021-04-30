import { Component, OnInit } from '@angular/core';
import List from '../../../assets/data.json';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

   public list:{no:number,machine:string,Operation:string,Parts:number,Time:number}[] = List;
  constructor() { }

  ngOnInit(): void {
  }

}
