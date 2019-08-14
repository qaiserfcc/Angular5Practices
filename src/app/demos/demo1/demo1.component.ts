import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  rows = [];
  searchText : string = "";
  showResult : boolean= false;
  constructor() {
    //add the rows you want , right now its dummy data we will get from api this
    for (let index = 0; index < 10; index++) {
      this.rows.push(index);
    }
    
   }

  ngOnInit() {
  }

  onChangeSearchTextBox()
  {
    if(this.searchText.trim() != "")
        this.showResult = true
    else
        this.showResult = false
    // alert(this.searchText);
  }

}
