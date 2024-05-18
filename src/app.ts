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


