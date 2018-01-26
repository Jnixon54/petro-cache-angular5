import { Injectable } from '@angular/core';
import { plays } from '../../assets/playBoundaries';
import { geoJSON } from 'leaflet';
import { Observable } from "rxjs/Observable"
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PolyService {
  selectedPlay: any;
  selectedPlayID: number;
  plays: any;
  
  constructor() { }
  getPlays(){
    plays.forEach((play, index) => {
      play.index = index;
    });
    return plays;
  }
  getGeoJsonArray() {
    let arr = [];
    plays.map((play, index) => {
      let newPoly = geoJSON(play.JSON, {
        index: index,
        name: play.name,
        style: {
          color: play.color
        },
        weight: 1,
        fillOpacity: 0.2,
        onEachFeature: (feature, layer) => {
          layer.on('click', this.setPlay.bind(this));
          // layer.on('mouseover', () => {
          //   console.log('mouseover')
          // })
        }
      })
      arr.push(newPoly);
    });
    return arr;
  }
  // onMouseOver(){};
  subject = new Subject<any>();
  playData = new Subject<any>();
  setPlay(e: any) {
    if(typeof e != 'number') {
      this.selectedPlayID = e.layer.options.index;
    } else {
      this.selectedPlayID = e;
    }
    this.selectedPlay = plays[this.selectedPlayID];
    this.subject.next({ id: this.selectedPlayID, data: this.selectedPlay });
    this.playData.next(this.selectedPlay);
  }
  getLayerData(): Observable<any> {
    return this.subject.asObservable();
  }
  getPlayData(): Observable<any> {
    return this.playData.asObservable();
  }
}
