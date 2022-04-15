import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'etisalat-home-page';
  textDir: string = 'ltr';
  isRtl: boolean = false;
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'ar') {
        this.textDir = 'rtl';
        this.isRtl = true;
      } else {
        this.textDir = 'ltr';
        this.isRtl = false;
      }
    });
  }
}
