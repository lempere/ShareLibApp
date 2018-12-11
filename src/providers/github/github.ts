import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GithubProvider provider.
*/
@Injectable()
export class GithubProvider {

  constructor(public http: HttpClient) {
  }

  getRepos(username) {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }

  getDetails(repo) {
    return this.http.get(`${repo.url}/readme`, {
      headers:
        {'Accept': 'application/vnd.github.VERSION.html'}
    });
  }
}
