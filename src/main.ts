export class Component {
	parameters: Object<any, any>;
	constructor(params: Object<any,any>){
		this.parameters = params;
	}
}

export class App {
	title: string;
	components: Array<Component>;
	constructor(title: string){
		this.title = title;
	}
	add(component: Component): void {
		this.components.push(component);
	}
	run(): void {
	}
}

function main(){
	let inputField: Component = new Component(
		{
		}
	);
	let echo: Component = new Component(
		{
		}
	);
	let app: App = new App("example");
	app.addComponent(inputField);
	app.addComponent(echoField);
	app.run();
}
