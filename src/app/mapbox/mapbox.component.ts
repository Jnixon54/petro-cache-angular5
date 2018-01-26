import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, polygon, geoJSON} from 'leaflet';
import { plays } from '../../assets/playBoundaries';
import { PolyService } from '../services/poly.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements OnInit {
  polySubscription: Subscription;
  constructor(private _polyService: PolyService) { 
    this.polySubscription = this._polyService.getLayerData().subscribe(data => this.zoomToPolygon(data))
  }
  
  options: {layers: any,
            zoomSnap: number,
            zoom: number,
            center: any} = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    ],
    zoomSnap: 0.25,
    zoom: 4.75,
    center: latLng(39.8, -98.6)
  }
  polygons: Array<any> = this._polyService.getGeoJsonArray();

  // Get map reference
  private map;
  onMapReady(map: any) { // Need to look at typing for Map
    this.map = map;
  }
  zoomToPolygon(data: any) {
    this.map.fitBounds(this.polygons[data.id].getBounds())
  }
  ngOnInit() {
    // this.arrays = this._polyService.getGeoJsonArray();
  }
  ngOnDestroy() {
    this.polySubscription.unsubscribe();
  }
}
