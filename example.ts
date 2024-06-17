import * as mina from './mod.ts';

export function pageHeader(pageNum: number): mina.Tag {
    let titleMap: Map<string, string> = new Map();
    let pageTitle: string = 'Page ' + pageNum.toString();
    titleMap.set('title', pageTitle);
    let title: mina.Tag = new mina.Tag(
        'title',
        pageTitle,
        false,
        titleMap
    );
    let metaMap: Map<string, string> = new Map();
    metaMap.set('name', 'viewport');
    metaMap.set('content', 'width=device-width, initial-scale=1');
    let meta: mina.Tag = new mina.Tag('meta', '', true, metaMap);
    let headerMap: Map<string, string> = new Map();
    headerMap.set('title', 'Page Heading');
    let header: mina.Tag = new mina.Tag('head', title.toString() + meta.toString(), false, headerMap);
    return header;
}

export function pageBody(pageNum: number): mina.Tag {
    let pageTitle: string = 'Page ' + pageNum.toString();
    let bodyMap: Map<string, string> = new Map();
    bodyMap.set('title', 'main');
    let h1Map: Map<string, string> = new Map();
    h1Map.set('id', 'mainHeading');
    let descMap: Map<string, string> = new Map();
    descMap.set('id', 'mainText');
    let h1Tag: mina.Tag = new mina.Tag('h1', pageTitle, false, h1Map);
    let descTag: mina.Tag = new mina.Tag('p', 'Hello from ' + pageTitle, false, descMap);
    let pageBodyTag: mina.Tag = new mina.Tag('body', h1Tag.toString() + descTag.toString(), false, bodyMap);
    return pageBodyTag;
}

export function buildPage(pageNum: number): mina.Page {
    let pageName: string = 'Page ' + pageNum.toString();
    let newPage: mina.Page = new mina.Page(pageName);
    let header: mina.Tag = pageHeader(pageNum);
    let body: mina.Tag = pageBody(pageNum);
    let htmlMap: Map<string, string> = new Map();
    htmlMap.set('lang', 'en-US');
    let htmlTag: mina.Tag = new mina.Tag('html', header.toString() + body.toString(), false, htmlMap);
    newPage.addTag(htmlTag);
    return newPage;
}

export async function main(): Promise<void> {
    let pages: Array<mina.Page> = new Array();
    let routes: Map<string, string> = new Map();
    for (let i = 0; i < 5; i++){
        let pageRoute: string = '/page' + i;
        let pageName: string = 'Page ' + i.toString();
        let page: mina.Page = buildPage(i);
        pages.push(page);
        routes.set(pageName, pageRoute);
    }
    let myApp: mina.App = new mina.App(
        'My Mina App',
        pages,
        routes
    );
    await mina.serveApp(
        myApp,
        8080,
        new mina.IpAddress('127', '0', '0', '1')
    );
}

await main();