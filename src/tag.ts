export class Tag{
    name: string;
    contents: string;
    isClosed: boolean;
    attributes: Map<string, string>;
    constructor(
        name: string,
        contents: string,
        isClosed: boolean,
        attributes: Map<string, string>
    ){
        this.name = name;
        this.contents = contents;
        this.isClosed = isClosed;
        this.attributes = attributes;
    }
    toString(): string {
        let html: string = '';
        let attributeString: string = '';
        html += '<' + this.name;
        for (let entry of Array.from(this.attributes.entries())){
            let key: string = entry[0];
            let value: string = entry[1];
            attributeString += ' ' + key + '="' + value + '"';
        }
        html += attributeString;
        if (this.isClosed){
            html += '/>'
        }
        else {
            html += '>' + this.contents + '</' + this.name + '>';
        }
        return html
    }
}

export default Tag;