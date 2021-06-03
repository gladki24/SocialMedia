import { createDateIfDefined, isDefined } from '../utils';

export class Emotion {
  public createdDate: Date;
  public id: string;
  public type: string;

  public constructor(res?: Emotion) {
    if (isDefined(res)) {
      this.createdDate = createDateIfDefined(res.createdDate);
      this.id = res.id;
      this.type = res.type;
    }
  }
}