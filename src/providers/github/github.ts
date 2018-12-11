import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GithubProvider provider.
*/
@Injectable()
export class GithubProvider {

  readonly HOST = 'https://api.github.com';

  constructor(public http: HttpClient) {
  }

  getRepos(username) {
    return this.http.get(`${this.HOST}/users/${username}/repos`);
  }

  getMostStarredRepos() {
    return this.http.get(`${this.HOST}/search/repositories`, {
        params: {
            q : 'stars:>0',
            sort: 'stars'
        }
    });
  }

  getDetails(repo) {
    return this.http.get(`${repo.url}/readme`, {
      headers:
        {'Accept': 'application/vnd.github.VERSION.html'}
    });
  }
}
