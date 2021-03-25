import { Icon } from '../../../../shared/enums/icon.enum';

export interface INavigationLinkInfo {
  url: string;
  name: string;
  icon: Icon;
}

export class NavigationLinkViewModel {
  public url: string;
  public name: string;
  public icon: Icon;

  public constructor(info: INavigationLinkInfo) {
    this.url = info.url;
    this.name = info.name;
    this.icon = info.icon;
  }
}
