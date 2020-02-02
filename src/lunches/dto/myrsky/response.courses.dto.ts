import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CoursesDTO {

  @Expose({ name: "title_fi" })
  title: string;

  @Expose()
  category: string;
}
