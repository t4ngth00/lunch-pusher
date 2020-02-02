import { map } from 'rxjs/operators';

import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  constructor(private readonly httpService: HttpService) {}

  publishToTeams(message: string): Promise<any> {
    return this.httpService
      .post(process.env.TARGET_WEBHOOK_URL, {
        text: message
      })
      .pipe(map(response => response.data))
      .toPromise();
  }

  /**
   * Get current date in prints date in YYYY-MM-DD format
   */
  getCurrentDate(): string {
    let dateObject = new Date();
    let date = ("0" + dateObject.getDate()).slice(-2); // current date (adjust 0 before single digit date)
    let month = ("0" + (dateObject.getMonth() + 1)).slice(-2); // current month
    let year = dateObject.getFullYear(); // current year

    return year + "-" + month + "-" + date;
  }
}
