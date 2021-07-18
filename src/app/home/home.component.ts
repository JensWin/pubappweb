import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  localStorage!: Storage;
  localStorageEntry: string;
  constructor() {
    this.localStorage = window.localStorage;
    this.localStorageEntry = "noch nix gemacht"
   }

  ngOnInit(): void {
  }

  testSet(){
    this.localStorage.setItem("testKey", "Das funktioniert ja super!")
  }

  testGet(){
    this.localStorageEntry = this.localStorage.getItem("testKey")!;
  }

}
