import { Emotion } from '../emotion';
import { isDefined } from '../../utils';

export class CreateYoodleResponse {
  public comments: any[];
  public emotions: Emotion[];
  public id: string;
  public link: string;
  public text: string;

  public constructor(res?: CreateYoodleResponse) {
    if (isDefined(res)) {
      this.comments = res.comments;
      this.emotions = res.emotions.map(emotion => new Emotion(emotion));
      this.id = res.id;
      this.link = res.link;
      this.text = res.text;
    }
  }
}