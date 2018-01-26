import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { PolyService } from '../services/poly.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input('title') title: string;
  constructor(private cdRef:ChangeDetectorRef, private _polyService: PolyService) { 
    this.polySubscription = this._polyService.getPlayData().subscribe(data => this.updatePlayData(data))
  }
  plays: Array<any> = this._polyService.getPlays();
  polySubscription: Subscription;
  selectedPlayData;
  selectedPlayName: string = "";

  changeSelectedPlay(event) {
    let playIndex = this.plays[event.target.value.split('.')[0]].index;
    this._polyService.setPlay(playIndex);
  }
  updatePlayData(data) {
    this.selectedPlayData = data;
    this.selectedPlayName = data.name;
    this.cdRef.detectChanges();
  }
  ngOnInit() { }
  ngOnDestroy() {
    this.polySubscription.unsubscribe();
  }
}
