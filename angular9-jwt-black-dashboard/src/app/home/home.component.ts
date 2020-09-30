import { UserService } from './../services/user.service';
import { Component, OnInit ,AfterViewChecked} from '@angular/core';

declare let $: any;
declare function loadJS():any;
declare function initDonutChart():any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewChecked {
  content: string;
  loadContentJS=false;

  constructor(private userService: UserService) { }

  ngAfterViewChecked(): void {
    /*
    if(this.loadContentJS===false){
      loadJS();
      initDonutChart();
      this.loadContentJS=true;
    }
    */

  }

  ngOnInit(): void {
    console.log("jquery:"+$.fn.jquery);
    initDonutChart();
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
