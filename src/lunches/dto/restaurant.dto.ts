import { Exclude, Expose } from 'class-transformer';

Exclude();
export class Restaurant {
  constructor(title: string, menu: string) {
    this.title = title;
    this.menu = menu;
  }

  @Expose()
  title: string;

  @Expose()
  menu: string;
}
