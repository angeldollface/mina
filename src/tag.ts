export class Tag {
  name: string;
  contents: string;
  isClosed: boolean;
  attributes: Map<string, string>;
  constructor(
    name: string,
    contents: string,
    isClosed: boolean,
    attributes: Map<string, string>,
  ) {
    this.name = name;
    this.contents = contents;
    this.isClosed = isClosed;
    this.attributes = attributes;
  }
  toString(): string {
    let html: string = "";
    let attributeString: string = "";
    html += "<" + this.name + " ";
    const attributesKeyArray = Array.from(this.attributes.keys());

    for (let i = 0; i < attributesKeyArray.length; i++) {
      const key: string = attributesKeyArray[i];
      let value: string = this.attributes.get(key);
      attributeString += key + '="' + value + '" ';
    }
    html += attributeString;
    if (this.isClosed) {
      html += "/>";
    } else {
      html += ">" + this.contents + "</" + this.name + ">";
    }
    return html;
  }
}

export default Tag;

