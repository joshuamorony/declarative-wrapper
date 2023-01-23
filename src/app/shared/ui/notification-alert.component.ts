import {
  Directive,
  Input,
  NgModule,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { AlertController } from '@ionic/angular';

@Directive({
  selector: 'app-notification-alert',
})
export class NotificationAlertComponent implements OnChanges {
  @Input() message!: string;

  constructor(private alertCtrl: AlertController) {}

  async ngOnChanges(changes: SimpleChanges) {
    const alert = await this.alertCtrl.create({
      message: changes['message'].currentValue,
    });

    alert.present();
  }
}

@NgModule({
  declarations: [NotificationAlertComponent],
  exports: [NotificationAlertComponent],
})
export class NotificationAlertComponentModule {}
