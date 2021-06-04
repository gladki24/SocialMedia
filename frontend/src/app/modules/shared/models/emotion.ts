import { createDateIfDefined, isDefined } from '../utils';
import {EmotionType} from "../enums/emotion.enum";

export class Emotion {
  public createdDate: Date;
  public id: string;
  public type: EmotionType;

  public constructor(res?: Emotion) {
    if (isDefined(res)) {
      this.createdDate = createDateIfDefined(res.createdDate);
      this.id = res.id;
      this.type = res.type;
    }
  }
}
