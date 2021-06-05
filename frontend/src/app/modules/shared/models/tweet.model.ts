import {createDateIfDefined, isDefined} from "../utils";
import {Emotion} from "./emotion";
import {EmotionType} from "../enums/emotion.enum";
import {Profile} from "../../main/components/user/models/profile.model";

export class Tweet {
    public id: string;
    public link: string;
    public text: string;
    public comments: Tweet[];
    public emotions: Emotion[];
    public author: Profile;
    public createdDate: Date;

    public constructor(res?: Tweet) {
        if (isDefined(res)) {
            this.id = res.id;
            this.link = res.link;
            this.text = res.text;
            this.comments = res.comments.map(comment => new Tweet(comment)).reverse();
            this.emotions = res.emotions.map(emotion => new Emotion(emotion));
            this.author = new Profile(res.author);
            this.createdDate = createDateIfDefined(res.createdDate);
        }
    }

    public get likeCount(): number {
        return this.emotions.filter(emotion => emotion.type === EmotionType.Like).length;
    }

    public get dislikeCount(): number {
        return this.emotions.filter(emotion => emotion.type === EmotionType.Dislike).length;
    }

    public get funnyCount(): number {
        return this.emotions.filter(emotion => emotion.type === EmotionType.Funny).length;
    }

    public get takeCareCount(): number {
        return this.emotions.filter(emotion => emotion.type === EmotionType.TakeCare).length;
    }

    public get commentCount(): number {
        return this.comments.length;
    }
}
