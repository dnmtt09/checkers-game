import {Component} from "@angular/core";
import {CommonModule, registerLocaleData} from "@angular/common";
import {RouterOutlet} from "@angular/router";

import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {MenuOptionComponent} from "./menu-option-component/menu-option.component";

registerLocaleData("it");

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  imports: [CommonModule, RouterOutlet, TranslateModule, MenuOptionComponent],
})
export class AppComponent {
  title = "checkers-game";

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang("it");
    this.setSystemLanguage();
  }

  setSystemLanguage(language?: string) {
    this.translateService.use(!!language ? language : "it");
  }
}
