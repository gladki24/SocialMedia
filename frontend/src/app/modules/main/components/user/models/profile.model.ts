import {isDefined} from "../../../../shared/utils";
import {Account} from "./account.model";
import {Tweet} from "../../../../shared/models/tweet.model";

export class Profile {
    public createdDate: Date;
    public id: number;
    public identifier: string;
    public account: Account;
    public tweets: Tweet[] = [];

    public constructor(res?: Profile) {
        if (isDefined(res)) {
            this.id = res.id;
            this.createdDate = res.createdDate;
            this.identifier = res.identifier;
            this.account = new Account(res.account);
            this.tweets = res.tweets.map(tweet => new Tweet(tweet)).reverse();
        }
    }
}
