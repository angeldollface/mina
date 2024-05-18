import * as mina from 'mina';

function incrementSubject(
	entity: number
): number {
	return entity + 1;
}

function decrementSubject(
	entity: number
): number {
	return entity - 1;
}

function main(){
	let count: number;
	let echoComponent: mina.Component = new mina.Component(
			stateful: count,
			elements: '<p>{{ count }}</p>'
	);
	let incrementController: mina.Controller = new mina.Controller(
			subject: count,
			agent: incrementSubject,
			element: '<button onclick="{{ agent }}">+</button>'
	);
	let decrementController: mina.Controller = new mina.Controller(
			subject: count,
			agent: decrementSubject,
			element: '<button onclick="{{ agent }}">-</button>'
	);	
	let counterApp: mina.App = new App("counter");
	let topHtml: string = '<body><h1>MINA COUNTER APP</h1>';
	let bottomHtml: string = '</body>';
	counterApp.inject(topHtml);
	counterApp.add(echoComponent);
	counterApp.add(incrementController);
	counterApp.inject(bottomHtml);
	counterApp.run();

}
