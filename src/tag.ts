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
        html += '<' + this.name + ' ';
        for (let i = 0; i < this.attributes.keys.length; i++){
            let key: string = this.attributes.keys()[i];
            let value: string = this.attributes[key];
            attributeString += key + '="' + value + '" ';
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