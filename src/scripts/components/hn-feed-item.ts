import { LitElement, html, property, customElement, css } from 'lit-element';
import { FeedItem } from '../types';

@customElement('hn-feed-item')
export class HnFeedItem extends LitElement {
  @property() model: FeedItem;
  @property() baseUrl: string = '/';

  static get styles() {
    return css`
      :host {
        display: block;
        color: #444;
      }
      h2 {
        margin-top: 0;
        font-size: 1em;
      }
      a {
        color: #550021;
      }
      a.feed-title {
        font-weight: bold;
        text-decoration: none;
      }
    `;
  }

  render() {
    const points = (this.model.points === null) ?
    html`` : html`${this.model.points} points`;

    const user = (this.model.user === null) ?
    html`` : html` by <a href="${this.baseUrl}user/${this.model.user}">${this.model.user}</a>`;

    const comments = (this.model.comments_count === 0) ?
    html`` : html` | <a href="${this.baseUrl}item/${this.model.id}">
    ${this.model.comments_count} comments</a>`;

    return html`
      <a class="feed-title" href=${this.model.url}><h2>${this.model.title}</h2></a>
      <p>
        ${points}
        ${user}
        posted ${this.model.time_ago}
        ${comments}
      </p>
    `;
  }
}
