import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, polygon, geoJSON} from 'leaflet';
// var plays = require('../../assets/playBoundaries.ts');
import { plays } from '../../assets/playBoundaries.ts';
import { PolyService } from '../services/poly.service';


@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements OnInit {
  constructor(private _polyService: PolyService) { 
    this._polyService.getLayerData().subscribe(data => this.zoomToPolygon(data))
  }
  
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    ],
    zoomSnap: 0.5,
    zoom: 4.5,
    center: latLng(39.8, -98.6)
  }
  polygons = this._polyService.getGeoJsonArray();
  // playsGeoJSON = plays.map((play, index) => {
    //   geoJSON(play.JSON);
    // })
    // polygons = this.playsGeoJSON;
    // playBoundaries = plays.map((play, index) => {
      //   let name = ("geojson" + play.name).replace(/ /g, "");
      //   // let weight = this.state.hover === name ? 3 : 2;
      // });
  private map;
  onMapReady(map: Map) {
    this.map = map;
  }

  zoomToPolygon(data) {
    // let map = this.onMapReady;
    console.log(data)
    this.map.fitBounds(data.layer.getBounds())
    console.log(this.map)
    // this.onMapReady;
  }
  
  ngOnInit() {
    // this.arrays = this._polyService.getGeoJsonArray();
  }
}