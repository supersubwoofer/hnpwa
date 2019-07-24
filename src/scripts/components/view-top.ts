import { LitElement, html, property, customElement } from 'lit-element';
import { FeedItem } from '../types';
import { getNew } from '../network/api.resource';
import './hn-feed-item';

@customElement('view-top')
export class ViewTop extends LitElement {
  @property() model:FeedItem[];
  @property() page:number = 1;

  render() {
    return html`<ul>${this.model.map(
      i => html`<hn-feed-item .model=${i}></hn-feed-item>`)}</ul>`;
  }

  onBeforeEnter = (location, commands, router) => {
    getNew(this.page)
      .then((res) => { return res; })
      .then((body) => {
        this.model = body.result;
      });
  }
}
