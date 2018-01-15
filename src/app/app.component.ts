import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currencies: string[] = [
    "BTC",
    "BCH",
    "ETH",
    "XRP",
    "LTC",
    "DSH",
  ];
}
