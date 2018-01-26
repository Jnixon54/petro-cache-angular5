import { Component, OnInit, Input } from '@angular/core';
import { PolyService } from '../services/poly.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input('title') title;
  plays = this._polyService.getPlays();
  selectedPlay;
  selectedPlayName = "";
  changeSelectedPlay(event) {
    this.selectedPlay = this.plays[event.target.value.split('.')[0]];
    this.selectedPlayName = event.target.value.split('.')[1].trim();
    this._polyService.setPlay(this.selectedPlay);
  }
  constructor(private _polyService: PolyService) { }
  ngOnInit() {  }

}
