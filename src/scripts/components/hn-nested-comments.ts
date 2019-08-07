import { LitElement, html, property, customElement, TemplateResult, css } from 'lit-element';
import { Item } from '../types';
import './hn-comment';

@customElement('hn-nested-comments')
export class HnNestedComments extends LitElement {
  @property() baseUrl: string = '/';
  @property() model: Item;

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 1em 2em;
        color: #550021;
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

    const commentHead =
      html`
      <header>
      <h1><a class="feed-title" href=${this.model.url}>${this.model.title}</a></h1>
      <p>
        ${this.model.points} points
        by <a href="${this.baseUrl}user/${this.model.user}">${this.model.user}</a>
        posted ${this.model.time_ago}
        | ${this.model.comments_count} comments
      </p>
      </header>
      `;

    const recurrsiveComments =
    (isRootComment:boolean, item: Item, recurrTemplate: TemplateResult) => {
      if (item === null) {
        return recurrTemplate;
      }

      const commentCss = (isRootComment) ? 'root-comment' : 'reply-comment';

      return html`
        <hn-comment class=${commentCss} .model=${item}>
        ${item.comments.map(r => recurrsiveComments(false, r, recurrTemplate))}
        </hn-comment>
        `;
    };

    const commentBody =
      html`
      <section class="comments-body">
      ${this.model.comments.map(c =>
        recurrsiveComments(true, c, html``))
      }
      </section>
      `;

    return html`
    <articale>
    ${commentHead}
    ${commentBody}
    </articale>
    `;
  }

}
