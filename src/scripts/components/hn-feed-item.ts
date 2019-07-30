import { LitElement, html, property, customElement } from 'lit-element';
import { FeedItem } from '../types';

@customElement('hn-feed-item')
export class HnFeedItem extends LitElement {
  @property() model:FeedItem;

  render() {
    return html`
    <li><article><a href=${this.model.url}>${this.model.title}</a></article>
    <p>${this.model.points} points by <a href="/user/${this.model.user}">${this.model.user}</a>
     ${this.model.time_ago} |
      <a href="/item/${this.model.comments_count}">${this.model.comments_count} comments</p>
    </li>`;
  }
}
