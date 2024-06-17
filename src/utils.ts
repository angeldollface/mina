export class IpAddress {
    a: string;
    b: string;
    c: string;
    d: string;

    constructor(
        a: string,
        b: string,
        c: string,
        d: string,
    ){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    toString(): string {
        return this.a + '.' + this.b + '.' + this.c + '.' + this.d;
    }
}

export default IpAddress;