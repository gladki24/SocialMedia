import { Injectable } from '@angular/core';
import {Profile} from "../models/profile.model";
import {ActivatedRoute} from "@angular/router";

@Injectable()
export class ProfileService {

  public profile: Profile = new Profile();

  public constructor(
      private readonly route: ActivatedRoute
  ) {
    this.profile = route.snapshot.data.profile;
  }
}
