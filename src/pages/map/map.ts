
import { IonicPage, NavController } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;
/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController,public geolocation: Geolocation) {
 
  }
 
  ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap(){
//inside load map
   new Promise(function(resolve, reject) {

      var options = {timeout: 10000, enableHighAccuracy: true};
      navigator.geolocation.getCurrentPosition(function (position) {
        let latLng = new google.maps.LatLng(-34.9290, 138.6010);
        
           let mapOptions = {
             center: latLng,
             zoom: 15,
             mapTypeId: google.maps.MapTypeId.ROADMAP
           }
        
           this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        
          resolve(position);
      }, function (err) {
          reject(err);
      }, options);    
  });

   
  }

  addMarker(){
    
     let marker = new google.maps.Marker({
       map: this.map,
       animation: google.maps.Animation.DROP,
       position: this.map.getCenter()
     });
    
     let content = "<h4>Information!</h4>";         
    
     this.addInfoWindow(marker, content);
    
   }

   addInfoWindow(marker, content){
    
     let infoWindow = new google.maps.InfoWindow({
       content: content
     });
    
     google.maps.event.addListener(marker, 'click', () => {
       infoWindow.open(this.map, marker);
     });
    
   }
  
}
