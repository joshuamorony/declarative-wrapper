import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
import { PlayersService } from '../shared/data-access/players.service';

@Component({
  selector: 'app-home',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title> The Game </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>You just lost</p>
    </ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(
    public playersService: PlayersService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.playersService.newPlayers$
      .pipe(takeUntil(this.destroy$))
      .subscribe(async (newPlayer) => {
        const alert = await this.alertCtrl.create({
          message: `A new challenger '${newPlayer.name}' appears. Player ID: '${newPlayer.id}'`,
        });

        alert.present();
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}

@NgModule({
  declarations: [HomeComponent],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
})
export class HomeComponentModule {}
