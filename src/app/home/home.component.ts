import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PlayersService } from '../shared/data-access/players.service';
import { NotificationAlertDirectiveModule } from '../shared/ui/notification-alert.directive';

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
      <app-notification-alert
        *ngIf="playersService.newPlayers$ | async as newPlayer"
        message="A new challenger '{{ newPlayer.name }}' appears. Player ID: '{{
          newPlayer.id
        }}'"
      ></app-notification-alert>
    </ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  constructor(public playersService: PlayersService) {}
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
    NotificationAlertDirectiveModule,
  ],
})
export class HomeComponentModule {}
