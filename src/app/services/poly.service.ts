import { Injectable } from '@angular/core';
import { plays } from '../../assets/playBoundaries';
import { geoJSON } from 'leaflet';
import { Observable } from "rxjs/Observable"
import { Subject } from 'rxjs/Subject';


@Injectable()
export class PolyService {
  selectedPlay: any;
  selectedPlayID: number;
  constructor() {
    
  }
  getPlays(){
    plays.forEach((play, index) => {
      play.index = index;
    });
    return plays;
  }
  getPlayData(){
    return this.selectedPlay;
  }
  setPlay(play){
    this.selectedPlay = play;
    this.selectedPlayID = play.index;
    console.log(play);
    this.zoomToPoly(this.selectedPlay.index)
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
          layer.on('click', this.zoomToPoly.bind(this));
          layer.on('mouseover', () => {
            console.log('mouseover')
          })
        }
      })
      arr.push(newPoly);
    });
    return arr;
  }
  onMouseOver(){};
  subject = new Subject<any>();
  zoomToPoly(e: any) {
    if(typeof e != 'number') {
      this.selectedPlayID = e.layer.options.index;
      this.selectedPlay = plays[this.selectedPlayID];
      console.log(this.selectedPlay);
    } else {
      this.selectedPlayID = e;
      
    }
    this.subject.next(this.selectedPlayID)
  }
  getLayerData(): Observable<any> {
    return this.subject.asObservable();
  }
}
