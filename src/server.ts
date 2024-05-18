import { App } from './app.ts';

export function handler(
	request: Request,
	body: string
): Response {
	return Response(body, { status: 200 });
}

export function serveApp(
	app: App, 
	port: number
): void {
	Deno.serve(
		{ port },
		handler(app.generateHTML())
	);
}

export default serveApp;
