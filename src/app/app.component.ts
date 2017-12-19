import { Component } from '@angular/core';
import {GoldService} from './gold.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  totalGold: number = this._goldService.getTotalGold();

  constructor(private _goldService: GoldService){}

}
