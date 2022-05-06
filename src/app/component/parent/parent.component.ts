import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
// arr : any = [
//   {
//     id :1,
//     name :"Usama"
//   },
//   {
//     id :1,
//     name :"Usama"
//   },
//   {
//     id :1,
//     name :"Usama"
//   }
// ]
// arr : string = "child to Parent" 



reciever(event : string){
  console.log(event)
}
  constructor() { }

  ngOnInit(): void {
  }

}
