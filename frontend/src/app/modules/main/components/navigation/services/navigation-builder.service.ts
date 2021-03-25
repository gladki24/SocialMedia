import { Injectable } from '@angular/core';
import { INavigationLinkInfo, NavigationLinkViewModel } from '../models/navigation-link-view.model';

@Injectable()
export class NavigationBuilderService {

  private _links: INavigationLinkInfo[] = [];

  public clear(): this {
    this._links = [];
    return this;
  }

  public add(link: INavigationLinkInfo): this {
    this._links.push(link);
    return this;
  }

  public build(): NavigationLinkViewModel[] {
    return this._links.map(link => new NavigationLinkViewModel(link));
  }
}
