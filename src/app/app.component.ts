import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router, private platform: Platform) {
    this.initalizeApp();
  }

  initalizeApp() {
    this.platform.ready().then(() => {
      if (Capacitor.isPluginAvailable('SplashScreen')) {
        SplashScreen.hide();
      }
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
}
