import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Leader } from '../../shared/leader';
import { Observable } from 'rxjs';
//import { HttpResponse } from '@angular/common/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

/*
  Generated class for the LeaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LeaderProvider {

  constructor(public http: HttpClient, private processHttpmsgService : ProcessHttpmsgProvider) {
    console.log('Hello LeaderProvider Provider');
  }

  getLeaders() : Observable<Leader[]> {
    return this.http.get(baseURL + 'leaders')
    .map(res => { return res})
    .catch(error => { return this.processHttpmsgService.handleError(error)})
  }

  getLeader(id: number) : Observable<Leader> {
    return this.http.get(baseURL + 'leader/' + id)
    .map(res => { return res})
    .catch(error => { return this.processHttpmsgService.handleError(error)})
  }

  getFeaturedLeader() : Observable<Leader> {
    return this.http.get(baseURL + 'leaders?featured=true')
    .map(res => { return res[0]})
    .catch(error => { return this.processHttpmsgService.handleError(error)})
  }

}
