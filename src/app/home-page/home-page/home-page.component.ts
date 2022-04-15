import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  isCollapsed = true;
  language: string = 'عربي';
  isScrolled: boolean = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {}

  onLanguageCick(language: string = 'en') {
    
    if (this.language == 'en') {
      this.language = 'عربي';
      language = 'ar';
    } else {
      this.language = 'en';
      language = 'en';
    }
    this.translate.use(language);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 5) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
