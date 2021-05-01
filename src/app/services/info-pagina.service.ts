import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any = {};
  loaded = false;

  constructor(private http: HttpClient) {
    this.http.get('assets/data/page-data.json')
      .subscribe(data => {
        this.loaded = true;
        this.info = data;
      }
      );
  }
}
