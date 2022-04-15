import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  language: string = 'عربي'; 
  public isCollapsed = true;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {}

  onLanguageCick(language: string = 'en'){
    this.language == 'en' ? this.language = 'عربي' : this.language = 'en';
    this.language == 'en' ? language = 'ar' : language = 'en';
    this.translate.use(language);

  }
}
