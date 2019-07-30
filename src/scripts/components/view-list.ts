import { LitElement, html, property, customElement } from 'lit-element';
import { FeedItem } from '../types';
import { getTop } from '../network/api.resource';
import './hn-page';
import './hn-feed-list';
import './hn-feed-item';

@customElement('view-list')
export class ViewList extends LitElement {
  @property() baseUrl:string = '/';
  @property() resourcePath:string = 'top/';
  @property() page:number = 1;
  @property() maxPage:number = 12;
  @property() model:FeedItem[];

  render() {
    return html`
    <hn-page
      url="${this.baseUrl}${this.resourcePath}"
      .page=${this.page}
      .max=${this.maxPage}>
    </hn-page>
    <hn-feed-list .model=${this.model}></hn-feed-list>
      `;
  }

  onBeforeEnter = (location, commands, router) => {
    console.log(location);
    if (location.params != null && typeof location.params.page === 'string') {
      this.page = Number(location.params.page);
    }
    if (location.baseUrl != null && location.baseUrl !== '') {
      this.baseUrl = location.baseUrl;
    }

    getTop(this.page)
      .then((res) => { return res; })
      .then((body) => {
        this.model = body.result;
      });
  }
}
