export class Component {
	parameters: Object<any, any>;
	constructor(params: Object<any,any>){
		this.parameters = params;
	}
}

export default Component;

/*
let count: number;
let component = new Component(
	{
		stateful: count,

	}
);
*/
