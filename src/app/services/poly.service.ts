import { Injectable } from '@angular/core';
import { plays } from '../../assets/playBoundaries';
import { geoJSON } from 'leaflet';
import { Observable } from "rxjs/Observable"
import { Subject } from 'rxjs/Subject';


@Injectable()
export class PolyService {


  constructor() {
    
  }
  getGeoJsonArray() {
    let arr = [];
    plays.map((play, index) => {
      arr.push(
        geoJSON(play.JSON, {
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
        }));
    });
    return arr;
  }

  onClick(e) {
    console.log(e);
    // map.fitBounds(e.layer.getBounds());
    // this.zoomToPoly;
  }
  onMouseOver(){};
  subject = new Subject<any>();
  zoomToPoly(e: any) {
    this.subject.next(e)
    // onMapReady(map: Map){
      // map.fitBounds(e.layer.getBounds());
    // }
  }
  getLayerData(): Observable<any> {
    return this.subject.asObservable();
  }
}
