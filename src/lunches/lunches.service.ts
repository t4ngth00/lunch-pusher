import { CommonService } from 'src/common/common.service';

import { Injectable } from '@nestjs/common';

import { Restaurant } from './dto/restaurant.dto';
import { RestaurantsService } from './services/restaurants.service';

@Injectable()
export class LunchesService {
  constructor(
    private readonly restaurants: RestaurantsService,
    private readonly commonService: CommonService
  ) {}

  getLunches(): Promise<Restaurant[]> {
    let currrentDate = this.commonService.getCurrentDate();

    return Promise.all(
      this.restaurants.getRestaurants().map(async service => {
        let title = `${service.getRestaurantName()} (${currrentDate})`;
        let menu = await service.getMenuString();

        return new Restaurant(title, menu);
      })
    );
  }

  async getTeamsMessage(): Promise<string> {
    let lunches = await this.getLunches();
    let message: string = "";

    message += "<pre>";
    lunches.forEach(lunch => {
      message += `<h2>${lunch.title}</h2>\n<p>${lunch.menu}</p>`;
      message += this.getSeparator();
    });
    message += "</pre>";

    return message;
  }

  private getSeparator(): string {
    return "\n------------------------------------------------\n";
  }
}
