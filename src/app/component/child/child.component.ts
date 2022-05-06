import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() recieved : string

public toSend : string 
  constructor() { }

@Output() sender = new EventEmitter();



  ngOnInit(): void {
// console.log(this.recieved)
this.toSend="hellow from parent";


this.sender.emit(this.toSend);
  }

}
