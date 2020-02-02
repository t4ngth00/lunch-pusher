import * as TJO from 'translate-json-object';

import { Injectable } from '@nestjs/common';

@Injectable()
export class TranslationService {
  private readonly TJO: any;

  constructor() {
    this.TJO = TJO();
    this.TJO.init({
      googleApiKey: process.env.TRANSLATE_GOOGLE_API_KEY,
      yandexApiKey: process.env.TRANSLATE_YANDEX_API_KEY
    });
  }

  translate(inputJson: any, toLanguage: string = "en"): any {
    return this.TJO.translate(inputJson, toLanguage);
  }
}
