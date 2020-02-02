import { Exclude, Expose, Type } from 'class-transformer';

import { CourseDTO } from './response.course';

@Exclude()
export class MenuDTO {
  @Expose({ name: "Date" })
  date: string;

  @Expose({ name: "SetMenus" })
  @Type(() => CourseDTO)
  courses: Array<CourseDTO>;
}
