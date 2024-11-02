import { Component } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

registerLocaleData('it');

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet, MainComponentComponent, TranslateModule],
})
export class AppComponent {
  title = 'checkers-game';

  constructor(private translateService: TranslateService) {
    this.initTranslateService();
  }

  private initTranslateService(): void {
    this.translateService.setDefaultLang('it');
    this.translateService.use('en');
  }
}
