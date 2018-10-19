import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'java';
  public users;

  constructor(
    private _http: HttpClient,
  ){}

  ngOnInit(): void {
    this._getUsers().subscribe(res => {
    });
    console.log();
  }

  private _getUsers() {
    return this._http.get('https://randomuser.me/api/?results=5000');
  }
}



