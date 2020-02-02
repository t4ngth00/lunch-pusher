import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ResponseDTO {
  @Expose()
  courses: Object;
}
