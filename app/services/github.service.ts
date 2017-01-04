import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
  private username = 'JordanBlakey';
  private client_id = '51c334a73855ba0d4978';
  private client_secret = '21b03432ed723bda259baaafa192d835e8d1ec3d';

  constructor(private _http:Http){
    console.log('Github Service Init...');
  }

  getUser(){
    return this._http.get('https://api.github.com/users/'+this.username)
        .map(res => res.json());
  }

  getRepos(){
    return this._http.get('https://api.github.com/users/'+this.username+'/repos')
        .map(res => res.json());
  }
  
  updateUsername(username:string){
    this.username = username;
  }
}
