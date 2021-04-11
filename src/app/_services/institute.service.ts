import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {
  private httpOptions: any;
  public accessToken: string;
  public userLogedIn;

  SERVER_URL = environment.apiUrl;
  constructor( private http: HttpClient) { 
    this.setHttpOptions();
  }

  /**
   * sets the http header
   * Authorization header setup in the case of loged in user
   * @param : nil
   * @returns : void
   */
   setHttpOptions(): void {
    this.userLogedIn = JSON.parse(sessionStorage.getItem('userLogin'));
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    if (this.userLogedIn != null) {
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.userLogedIn.token
      });
    }

    this.httpOptions = { headers };
  }

  public doGetRequest(url: any) {
    return this.http.get<any>(this.SERVER_URL + url, this.httpOptions).pipe(
      map((response) => {
        return response;
      }),
    );
  }
  public doPostRequest(url: any, data: any) {
    return this.http.post<any>(this.SERVER_URL + url, data, this.httpOptions).pipe(
      map((response) => {
        return response;
      }),
    );
  }
}
