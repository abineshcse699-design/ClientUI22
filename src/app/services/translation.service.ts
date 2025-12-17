import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private translations: any = {};
  private currentLang = 'en';

  constructor(private http: HttpClient) {}

  loadTranslations(lang: string) {
    this.currentLang = lang;

    return this.http
      .get(`assets/i18n/${lang}.json`)
      .subscribe((data: any) => {
        this.translations = data;
      });
  }

  translate(key: string): string {
    return this.translations[key] || key;
  }

  getCurrentLanguage(): string {
    return this.currentLang;
  }
}
