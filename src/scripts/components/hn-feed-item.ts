import { LitElement, html, property, customElement } from 'lit-element';
import { FeedItem } from '../types';

@customElement('hn-feed-item')
export class HnFeedItem extends LitElement {
  @property() model: FeedItem;
  @property() baseUrl: string = '/';

  render() {
    return html`
    <li>
      <article>
        <a href=${this.model.url}>${this.model.title}</a>
        <p>${this.model.points} points by
          <a href="${this.baseUrl}user/${this.model.user}">${this.model.user}</a>
          ${this.model.time_ago} |
          <a href="${this.baseUrl}item/${this.model.comments_count}">
          ${this.model.comments_count} comments</a>
        </p>
      </article>
    </li>`;
  }
}
