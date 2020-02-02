import { Exclude, Expose, Type } from 'class-transformer';

import { MenuDTO } from './response.menu';

@Exclude()
export class ResponseDTO {
  @Expose({ name: "MenusForDays" })
  @Type(() => MenuDTO)
  menus: Array<MenuDTO>;
}
