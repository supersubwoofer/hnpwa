import { LitElement, html, property, customElement } from 'lit-element';
import { FeedItem } from '../types';
import './hn-feed-item';

@customElement('hn-feed-list')
export class ViewHnFeedList extends LitElement {
  @property() model: FeedItem[] = [];
  @property() baseUrl: string = '/';

  render() {
    return html`
      <ol>${this.model.map(
        i => html`<li><hn-feed-item .model=${i} .baseUrl=${this.baseUrl}></hn-feed-item></li>`)}
      </ol>
      `;
  }
}
