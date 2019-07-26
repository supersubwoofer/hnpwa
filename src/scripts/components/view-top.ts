import { LitElement, html, property, customElement } from 'lit-element';
import { FeedItem } from '../types';
import { getTop } from '../network/api.resource';
import './hn-page';
import './hn-feed-item';

@customElement('view-top')
export class ViewTop extends LitElement {
  @property() baseUrl:string = '/';
  @property() resourcePath:string = 'top/';
  @property() model:FeedItem[];
  @property() page:number = 1;

  render() {
    console.log(`${this.baseUrl}${this.resourcePath}`);
    return html`
    <hn-page url="${this.baseUrl}${this.resourcePath}" .page=${this.page} .max=${12}></hn-page>
    <ul>${this.model.map(i => html`<hn-feed-item .model=${i}></hn-feed-item>`)}</ul>
      `;
  }

  onBeforeEnter = (location, commands, router) => {
    if (location.params != null && typeof location.params.page === 'string') {
      this.page = Number(location.params.page);
    }
    if (location.base_url != null) {
      this.baseUrl = location.base_url;
    }

    getTop(this.page)
      .then((res) => { return res; })
      .then((body) => {
        this.model = body.result;
      });
  }
}
