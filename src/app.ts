import Page from './page.ts';

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
}

export default App;