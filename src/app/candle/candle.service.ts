import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CandleService {

  constructor() { }

  getPrices(symbol: string): Observable<number[][]> {
    return of([
      [
        1420041600,
        1.3,
      ],
      [
        1420128000,
        3.56,
      ],
      [
        1420214400,
        10.364,
      ],
      [
        1420300800,
        18.673,
      ],
      [
        1420387200,
        2.883,
      ],
    ]);
  }

}
