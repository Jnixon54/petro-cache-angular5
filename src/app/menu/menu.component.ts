import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  plays = ["play1", "play2", "play3"];
  selectedPlayName = ""
  changeSelectedPlay(event) {
    this.selectedPlayName = event.target.value;
    console.log(event.target.value)
  }
  constructor() { }
  ngOnInit() {}

}
