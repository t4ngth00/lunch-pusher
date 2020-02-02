import { CommonModule } from 'src/common/common.module';
import { TranslationModule } from 'src/translation/translation.module';

import { HttpModule, Module } from '@nestjs/common';

import { LunchesController } from './lunches.controller';
import { LunchesService } from './lunches.service';
import { MajakkaRestaurantService } from './services/majakka.restaurant.service';
import { MyrskyRestaurantService } from './services/myrsky.restaurant.service';
import { RestaurantsService } from './services/restaurants.service';

@Module({
  imports: [HttpModule, CommonModule, TranslationModule],
  providers: [
    LunchesService,
    RestaurantsService,
    MajakkaRestaurantService,
    MyrskyRestaurantService
  ],
  controllers: [LunchesController]
})
export class LunchesModule {}
