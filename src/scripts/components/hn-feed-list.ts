import { LitElement, html, property, customElement } from 'lit-element';
import { FeedItem } from '../types';
import './hn-feed-item';

@customElement('hn-feed-list')
export class ViewHnFeedList extends LitElement {
  @property() model:FeedItem[];

  render() {
    return html`
      <ul>${this.model.map(i => html`<hn-feed-item .model=${i}></hn-feed-item>`)}</ul>
      `;
  }
}
