import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Router } from '@angular/router';
import { Pub } from './pub/models/Pub';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    pubs: Pub[] = [];
    title = 'pubappweb';

    constructor(private _router: Router){

    }

    ngOnInit(){
      this.pubs = [];

      this.pubs.push(new Pub(1, "Scruffy Murphys", "Schwetzingen"));
      this.pubs.push(new Pub(2, "O Reillys", "Mannheim"));
      this.pubs.push(new Pub(3, "Störtebecker", "Mannheim"));
    }

    onSelection(e: MatSelectionListChange){
     this._router.navigate(['pub', e.option.value.id]);
   }
}
