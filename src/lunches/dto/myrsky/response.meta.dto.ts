import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class MetaDTO {

  @Expose()
  meta: number;

  @Expose()
  courses: string;
}
