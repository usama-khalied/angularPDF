import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() recieved : string

  constructor() { }

  ngOnInit(): void {
console.log(this.recieved)
  }

}
