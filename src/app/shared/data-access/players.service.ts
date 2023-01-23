import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  newPlayers$ = new Observable((observer) => {
    setInterval(() => {
      observer.next('Josh');
    }, 5000);
  });
}
