import { Component, Input } from '@angular/core';
import { NavigationLinkViewModel } from '../../models/navigation-link-view.model';

@Component({
  selector: 'ms-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss']
})
export class NavigationLinkComponent {
  @Input() public link: NavigationLinkViewModel;
}
