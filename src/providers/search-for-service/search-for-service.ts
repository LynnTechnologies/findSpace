import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
//import {AuthService} from '../../providers/auth-service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the SpaceForServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SearchForServiceProvider {

  baseUrl:string;
  constructor(private http:Http){
      this.baseUrl = 'http://gateforyou.16mb.com/searchSpace.php';
     // this.baseUrl = 'http://localhost/api/feed';
    //  this.baseUrl = 'http://localhost/sf/searchSpace.php';
  }

  searchSpace(data) {
   
    //console.log(this.http.get(this.baseUrl));
      //  return this.http.get(this.baseUrl,req).do((res: Response) => console.log(res))
      //  .map((res: Response) => res.json());

      // return this.http.post(this.baseUrl,req,options).subscribe(res => {
      //   console.log(res.json());
      //   res.json()
      //   //resolve(res.json())
      //   }, error => {
      //   console.log("Oooops!");
      //   });
      return new Promise((resolve,reject) => {
        let headers = new Headers({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({
          headers: headers
        });
        var req = JSON.stringify(data);
      //  var response;
        console.log("inside search space"+req);

        this.http.post(this.baseUrl,req,options).subscribe(res => {
          
          resolve(res.json());
          
          }, error => {
            reject("Oooops!");
          });
      });
      
  }

}
