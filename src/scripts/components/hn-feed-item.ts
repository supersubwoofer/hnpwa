import { LitElement, html, property, customElement } from 'lit-element';
import { FeedItem } from '../types';

@customElement('hn-feed-item')
export class HnFeedItem extends LitElement {
  @property() model:FeedItem;

  render() {
    return html`<li>${this.model.title}</li>`;
  }
}
