import { Injectable } from '@nestjs/common';

import { MajakkaRestaurantService } from './majakka.restaurant.service';
import { MyrskyRestaurantService } from './myrsky.restaurant.service';

@Injectable()
export class RestaurantsService {
  constructor(
    private readonly majakkaService: MajakkaRestaurantService,
    private readonly myrskyService: MyrskyRestaurantService
  ) {}

  getRestaurants(): Array<IRestaurantService> {
    return [this.majakkaService, this.myrskyService];
  }
}
