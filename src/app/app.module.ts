import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapboxComponent } from './mapbox/mapbox.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { PolyService } from './services/poly.service';


@NgModule({
  declarations: [
    AppComponent,
    MapboxComponent,
    MenuComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LeafletModule
  ],
  providers: [PolyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
