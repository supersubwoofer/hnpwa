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
  @property() pageTitle:string;
  @property() page:number = 1;
  @property() maxPage:number = 12;
  @property() model:FeedItem[] = [];

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .invisible {
        position: absolute;
        left: 5000em;
      }

      .sticky {
        position: fixed;
        top: 50px;
        width: 100%;
        background: #fff;
      }

      .sticky + .content {
        padding-top: 60px;
      }

      @media (max-width: 62em) {

        .sticky {
          top: 40px;
        }
      }
    `;
  }

  render() {
    return html`
    <h1 class="page-title invisible">${this.pageTitle}</h1>
    <hn-page
      class="sticky"
      url="${this.baseUrl}${this.resourcePath}"
      .page=${this.page}
      .max=${this.maxPage}>
    </hn-page>
    <hn-feed-list class="content" .model=${this.model} .baseUrl=${this.baseUrl}></hn-feed-list>
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
    this.pageTitle = appState.pageTitle;
    this.maxPage = appState.maxPage;

    appState.listCallback(this.page)
    .then((res) => { return res; })
    .then((body) => {
      this.model = body.result;
    });
  }

}
