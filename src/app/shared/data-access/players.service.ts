import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  newPlayers$: Observable<{ id: number; name: string }> = new Observable(
    (observer) => {
      let playerId = 0;

      setInterval(() => {
        playerId++;

        observer.next({
          id: playerId,
          name: 'Josh',
        });
      }, 3000);
    }
  );
}
