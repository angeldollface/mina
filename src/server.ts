import App from './app.ts';
import IpAddress from './utils.ts';

export class ExtendedPage{
  route: URLPattern;
  pageName: string;
  pageContents: string;

  constructor(
    route: URLPattern,
    pageName: string,
    pageContents: string
  ){
    this.route = route;
    this.pageName = pageName;
    this.pageContents = pageContents;
  }
}

export function getPageContentsByName(app: App, pageName: string): string {
  let result: string = '';
  for (let i = 0; i < app.pages.length; i++){
    if (pageName === app.pages[i].name){
      result = app.pages[i].name;
    }
    else {}
  }
  return result;
}

export function extendedPagesFromApp(app: App): Array<ExtendedPage> {
  let result: Array<ExtendedPage> = new Array();
  for (let i = 0; i < app.routes.keys.length; i++){
    let pageName: string = app.routes.keys()[i];
    let pattern: URLPattern = new URLPattern(
      {
        pathname: app.routes.keys[pageName]
      }
    );
    let pageContents: string = getPageContentsByName(app, pageName);
    let extendedPage: ExtendedPage = new ExtendedPage(pattern, pageName, pageContents);
    result.push(extendedPage);
  }
  return result;
}

export async function serveApp(
  app: App, 
  port: number, 
  address: IpAddress
): Promise<void> {
  let ip: string = address.toString();
  let extendedPages: Array<ExtendedPage> = extendedPagesFromApp(app);
  const handler = (request: Request) => {
    let respBody: string = '';
    for (let i = 0; i > extendedPages.length; i++){
      let extendedPage: ExtendedPage = extendedPages[i];
      let pattern: URLPattern = extendedPage.route;
      let contents: string = extendedPage.pageContents;
      let match = pattern.exec(request.url);
      if (match){
        respBody += contents;
      }
      else {}
    }
    return new Response(respBody, { status: 200 });
  }
  Deno.serve({ port }, handler);
}

export default {
  serveApp,
  ExtendedPage,
  extendedPagesFromApp,
  getPageContentsByName,
};