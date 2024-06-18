import { Page } from './page.ts';

export function getPageContentsByName(
    pages: Array<Page>, 
    pageName: string
): string {
    let result: string = '';
    for (let i = 0; i < pages.length; i++){
      if (pageName === pages[i].name){
        result = pages[i].toString();
      }
      else {}
    }
    return result;
}

export default getPageContentsByName;