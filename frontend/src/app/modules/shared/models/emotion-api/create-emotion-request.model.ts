import {EmotionType} from "../../enums/emotion.enum";

export class CreateEmotionRequest {
    public type: EmotionType;
    public tweetLink: string;
}
