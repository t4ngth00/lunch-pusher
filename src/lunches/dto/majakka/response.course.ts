import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CourseDTO {
  @Expose({ name: "Name" })
  name: string;

  @Expose({ name: "Components" })
  components: string[];
}
