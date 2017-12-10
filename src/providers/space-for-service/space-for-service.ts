import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the SpaceForServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SpaceForServiceProvider {

  baseUrl:string;
  baseUrlForLike:string;
  constructor(private http:Http){
     this.baseUrl = 'http://gateforyou.16mb.com/user.php';
     // this.baseUrlForLike = 'http://gateforyou.16mb.com/updateLikeForSpace.php';
     // this.baseUrl = 'http://localhost/sf/user.php';
  }

  getPosts() {
      //console.log(this.http.get(this.baseUrl));
      return this.http.get(this.baseUrl).do((res: Response) => console.log(res))
      .map((res: Response) => res.json());
  }

  updateLike(id) {
    return this.http.post(this.baseUrlForLike,{spaceId : id},null).do((res: Response) => console.log(res))
    .map((res: Response) => res.json());
  }
  

}
