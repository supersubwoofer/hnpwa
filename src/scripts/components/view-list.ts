import { LitElement, html, property, customElement, css } from 'lit-element';
import { FeedItem } from '../types';
import { appState } from '../stateAction';
import './hn-page';
import './hn-feed-list';
import './hn-feed-item';

@customElement('view-list')
export class ViewList extends LitElement {
  @property() baseUrl:string = '/';
  @property() resourcePath:string = 'top/';
  @property() page:number = 1;
  @property() maxPage:number = 12;
  @property() model:FeedItem[] = [];

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
    <hn-page
      url="${this.baseUrl}${this.resourcePath}"
      .page=${this.page}
      .max=${this.maxPage}>
    </hn-page>
    <hn-feed-list .model=${this.model} .baseUrl=${this.baseUrl}></hn-feed-list>
      `;
  }

  onBeforeEnter = (location, commands, router) => {
    if (location.params != null && typeof location.params.page === 'string') {
      this.page = Number(location.params.page);
    }

    if (location.baseUrl != null && location.baseUrl !== '') {
      this.baseUrl = location.baseUrl;
    }

    this.resourcePath = appState.resourcePath;
    this.maxPage = appState.maxPage;

    appState.listCallback(this.page)
    .then((res) => { return res; })
    .then((body) => {
      this.model = body.result;
    });
  }

}
