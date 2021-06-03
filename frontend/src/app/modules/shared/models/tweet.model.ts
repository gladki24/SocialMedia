import {isDefined} from "../utils";

export class Tweet {
    public id: string;
    public link: string;
    public text: string;
    public comments: any[]; // todo
    public emotions: any[]; // todo

    public constructor(res?: Tweet) {
        if (isDefined(res)) {
            this.id = res.id;
            this.link = res.link;
            this.text = res.text;
            this.comments = [];
            this.emotions = [];
        }
    }
}
