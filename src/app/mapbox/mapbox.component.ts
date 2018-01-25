import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, polygon, geoJSON} from 'leaflet';
// var plays = require('../../assets/playBoundaries.ts');
import { plays } from '../../assets/playBoundaries.ts';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements OnInit {
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    ],
    zoomSnap: 0.5,
    zoom: 4.5,
    center: latLng(39.8, -98.6)
  }
  playsGeoJSON = plays.map((play, index) => {
    geoJSON(play.JSON);
  })
  polygons = this.playsGeoJSON;
  // playBoundaries = plays.map((play, index) => {
  //   let name = ("geojson" + play.name).replace(/ /g, "");
  //   // let weight = this.state.hover === name ? 3 : 2;
  // });
  constructor() { 

  }

  ngOnInit() {

  }

}
