import { Component } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChessboardComponent } from './components/chessboard/chessboard.component';

import {
  TranslateService,
  TranslateModule,
  TranslateStore,
  TranslateLoader,
} from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { translationHttpLoader } from './core/translate/http-loader-factory';

registerLocaleData('it');

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [BrowserModule, HttpClientModule, CommonModule, RouterOutlet, ChessboardComponent],
  providers: [
    // { provide: TranslateLoader, useClass: translationHttpLoader, deps: [HttpClient] }, // Provide the translate loader
    { provide: TranslateService, useClass: TranslateService }, // Provide the translate service
  ],
})
export class AppComponent {
  title = 'checkers-game';

  constructor(private translateService: TranslateService) {
    this.initTranslateService();
  }

  private initTranslateService(): void {
    this.translateService.setDefaultLang('it');
    this.translateService.use('it');
  }
}
