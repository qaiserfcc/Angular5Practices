import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from 'src/app/demoservice.service';
@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  apiCall :boolean = false;
  rows = [];
  searchText : string = "";
  showResult : boolean= false;
  demoService : DemoserviceService;
  error : any;
  constructor(private _demoService : DemoserviceService) {
    //add the rows you want , right now its dummy data we will get from api this
    this.demoService = _demoService;
    
    
   }

  ngOnInit() {
  }

  onChangeSearchTextBox()
  {
    if(this.searchText.trim() != "")
    {
      this.demoService.getSimilarSkills().subscribe(resp => {
        debugger;
        this.rows = [];
        console.log(resp.toString());
        for (let index = 0; index < 10; index++) {
          this.showResult = true;
          this.rows.push(resp[index].title);
        }
      }, // success path
      error => {this.error = error; console.log(error); 
        this.showResult = false; } );

    }
    else{
      this.showResult = false;
    }
  }

}
