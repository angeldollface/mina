import Tag from "./tag.ts";

export class Page {
  name: string;
  tags: Array<Tag>;

  constructor(name: string) {
    this.name = name;
    this.tags = [];
  }
  addTag(tag: Tag): void {
    this.tags.push(tag);
  }

  toString(): string {
    let html: string = "";
    for (let i = 0; i < this.tags.length; i++) {
      html += this.tags[i].toString();
    }
    return html;
  }
}

export default Page;

