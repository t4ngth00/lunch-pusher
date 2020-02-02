import { plainToClass } from 'class-transformer';
import { map } from 'rxjs/operators';
import { CommonService } from 'src/common/common.service';

import { HttpService, Injectable } from '@nestjs/common';

import { CoursesDTO } from '../dto/myrsky/response.courses.dto';
import { ResponseDTO as MyrskyResponseDTO } from '../dto/myrsky/response.dto';

@Injectable()
export class MyrskyRestaurantService implements IRestaurantService {
  private readonly name = "Myrsky";
  private readonly jsonUrl =
    "https://www.sodexo.fi/ruokalistat/output/daily_json/232/";

  constructor(
    private readonly httpService: HttpService,
    private readonly commonService: CommonService
  ) {}

  getRestaurantName(): string {
    return this.name;
  }

  async getMenuString(): Promise<string> {
    // Get today courses
    let data = await this.getJsonData();
    let todayCourses: Array<CoursesDTO> = plainToClass(
      CoursesDTO,
      Object.values(data.courses)
    );

    // Compose courses team message
    let resultString: string = "";
    todayCourses.forEach(course => {
      resultString += `${course.category}:\n- ${course.title} \n`;
    });

    return resultString;
  }

  private getJsonData(): Promise<MyrskyResponseDTO> {
    return this.httpService
      .get(this.jsonUrl + this.commonService.getCurrentDate())
      .pipe(map(response => plainToClass(MyrskyResponseDTO, response.data)))
      .toPromise();
  }
}
