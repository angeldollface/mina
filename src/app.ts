import { Controller } from './controller.ts';
import { Component } from './component.ts';

export class App {
	title: string;
	statefulVars: Array<any>,
	controllers: Array<Controller>,
	components: Array<Component>;
	constructor(title: string){
		this.title = title;
	}
	addComponent(component: Component): void {
		this.components.push(component);
	}
	addController(controller: Controller): void {
		this.controllers.push(controller);
	}
	run(): void {
	}
}

export default App;
