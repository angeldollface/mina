import { Page }from './page.ts';
import { getPageContentsByName } from './utils.ts';

export class App {
    name: string;
    pages: Array<Page>;
    routes: Map<string, string>;

    constructor(
        name: string, 
        pages: Array<Page>,
        routes: Map<string, string>
    ){
        this.name = name;
        this.pages = pages;
        this.routes = routes;
    }
    addPage(page: Page): void {
        this.pages.push(page);
    }

    async runApp(port: number): Promise<void> {
        Deno.serve(
            { port },
            async (req) => {
                let url: URL = new URL(req.url);
                let path: string = url.pathname;
                let respBody: string = '404';
                for (let entry of Array.from(this.routes.entries())){
                    let pageName: string = entry[0];
                    let pageRoute: string = entry[1];
                    if (path === pageRoute) {
                        respBody = '';
                        let pageContents: string = getPageContentsByName(this.pages, pageName);
                        respBody += pageContents;
                    }
                    else {}
                }
                return new Response(
                    respBody, 
                {
                    status: 200,
                    headers: {
                        "content-type": "text/html; charset=utf-8"
                    }
                }
            );
          }
        );
    }
}

export default App;