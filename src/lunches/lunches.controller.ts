import { CommonService } from 'src/common/common.service';

import { Controller, Get, Post } from '@nestjs/common';

import { Restaurant } from './dto/restaurant.dto';
import { LunchesService } from './lunches.service';

@Controller("lunches")
export class LunchesController {
  constructor(
    private readonly lunchesService: LunchesService,
    private readonly commonService: CommonService
  ) {}

  @Get()
  async getLunches(): Promise<Restaurant[]> {
    try {
      let lunches = await this.lunchesService.getLunches();

      return lunches;
    } catch (error) {
      console.log(error);
    }
  }

  @Post()
  async sendLunches(): Promise<string> {
    try {
      let lunchesMessage = await this.lunchesService.getTeamsMessage();
      this.commonService.publishToTeams(lunchesMessage);

      return "Send message to teams lunch channel successfully!";
    } catch (error) {
      console.log(error);
    }
  }
}
