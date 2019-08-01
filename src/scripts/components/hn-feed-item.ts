import { LitElement, html, property, customElement } from 'lit-element';
import { FeedItem } from '../types';

@customElement('hn-feed-item')
export class HnFeedItem extends LitElement {
  @property() model: FeedItem;
  @property() baseUrl: string = '/';

  render() {
    const points = (this.model.points === null) ?
    html`` : html`${this.model.points} points`;

    const user = (this.model.user === null) ?
    html`` : html` by <a href="${this.baseUrl}user/${this.model.user}">${this.model.user}</a>`;

    const comments = (this.model.comments_count === 0) ?
    html`` : html` | <a href="${this.baseUrl}item/${this.model.id}">
    ${this.model.comments_count} comments</a>`;

    return html`
      <a href=${this.model.url}>${this.model.title}</a>
      <p>
        ${points}
        ${user}
        posted ${this.model.time_ago}
        ${comments}
      </p>
    `;
  }
}
