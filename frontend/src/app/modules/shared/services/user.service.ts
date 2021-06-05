import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {LocalStorageService} from "./local-storage.service";
import {Profile} from "../../main/components/user/models/profile.model";
import {UserApiService} from "../../main/components/user/services/user-api.service";
import {tap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public constructor(
        private readonly _apiService: UserApiService,
        private readonly _localStorage: LocalStorageService
    ) {
    }

    public loadAndSetUserProfile(): Observable<Profile> {
        return this._apiService.getUserProfile()
            .pipe(
                tap(profile => this._localStorage.set('user', JSON.stringify(profile)))
            )
    }

    public getUserProfile(): Profile {
        const profile = JSON.parse(this._localStorage.get('user'));
        return new Profile(profile);
    }

    public clearUserProfile(): void {
        this._localStorage.clear('user');
    }
}
