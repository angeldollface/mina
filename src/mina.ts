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
