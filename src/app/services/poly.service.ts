import { Injectable } from '@angular/core';
import { plays } from '../../assets/playBoundaries';
import { geoJSON } from 'leaflet';
import { Observable } from "rxjs/Observable"
import { Subject } from 'rxjs/Subject';


@Injectable()
export class PolyService {
  selectedPolygon: any;
  constructor() {
    
  }
  getPlays(){
    plays.forEach((play, index) => {
      play.index = index;
    });
    return plays;
  }
  setPlay(play){
    this.selectedPolygon = play;
    this.zoomToPoly(this.selectedPolygon.index)
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
      newPoly.id = index;
      arr.push(newPoly);
    });
    console.log(arr)
    return arr;
  }
  onMouseOver(){};
  subject = new Subject<any>();
  zoomToPoly(e: any) {
    this.selectedPolygon = e;
    this.subject.next(e)
  }
  getLayerData(): Observable<any> {
    return this.subject.asObservable();
  }
}
