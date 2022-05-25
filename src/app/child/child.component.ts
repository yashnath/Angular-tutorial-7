import { Component, OnInit,Input } from '@angular/core'; //here we have to specify decorator input

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
@ Input() child_data = 0; //here Input is used as method, child_data is 
                          //the variable getting the value from parrent_data 


  ngOnInit(): void {
  }

  update(){
   // debugger;
    this.child_data=Math.floor(Math.random()*10);
  }

}
