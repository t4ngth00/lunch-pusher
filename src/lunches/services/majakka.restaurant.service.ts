import { plainToClass } from 'class-transformer';
import { map } from 'rxjs/operators';
import { CommonService } from 'src/common/common.service';

import { HttpService, Injectable } from '@nestjs/common';

import { ResponseDTO as MajakkaResponseDTO } from '../dto/majakka/response.dto';
import { MenuDTO } from '../dto/majakka/response.menu';

@Injectable()
export class MajakkaRestaurantService implements IRestaurantService {
  private readonly name = "Majakka";
  private readonly jsonUrl =
    "https://www.amica.fi/modules/json/json/Index?costNumber=2532&language=fi";

  constructor(
    private readonly httpService: HttpService,
    private readonly commonService: CommonService
  ) {}

  getRestaurantName(): string {
    return this.name;
  }

  async getMenuString(): Promise<string> {
    // Get today courses
    let data: MajakkaResponseDTO = await this.getJsonData();
    let todayMenu: MenuDTO = data.menus.filter(menu =>
      menu.date.includes(this.commonService.getCurrentDate())
    )[0];
    let todayCourses = todayMenu ? todayMenu.courses : [];

    // Compose courses team message
    let resultString: string = "";
    todayCourses.forEach(course => {
      resultString += `${course.name}:\n- ${course.components.join(
        " \r- "
      )} \n`;
    });

    return resultString;
  }

  private getJsonData(): Promise<MajakkaResponseDTO> {
    return this.httpService
      .get(this.jsonUrl + `&date=${this.commonService.getCurrentDate()}`)
      .pipe(map(response => plainToClass(MajakkaResponseDTO, response.data)))
      .toPromise();
  }
}
