import { LitElement, html, property, customElement, TemplateResult } from 'lit-element';
import { Item, FeedItem } from '../types';
import { appState } from '../stateAction';
import './hn-comment';

@customElement('view-comments')
export class ViewComments extends LitElement {
  @property() baseUrl: string = '/';
  @property() commentId: string;
  @property() model: Item;

  render() {

    const commentHead =
      html`
      <header>
      <h1><a href=${this.model.url}>${this.model.title}</a></h1>
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

  onBeforeEnter = (location, commands, router) => {
    if (location.params != null && typeof location.params.id === 'string') {
      this.commentId = location.params.id;
    }

    appState.itemCallback(this.commentId)
      .then((res) => { return res; })
      .then((body) => {
        this.model = body.result;
      });
  }
}
