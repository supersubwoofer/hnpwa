import { LitElement, html, property, customElement, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { until } from 'lit-html/directives/until.js';
import { Item } from '../types';

@customElement('hn-comment')
export class HnComment extends LitElement {
  @property() baseUrl: string = '/';
  @property() model: Item;
  @property() isShownReply:boolean = true;

  static get styles() {
    return css`
      :host {
        display: block;
      }
      :host(.root-comment) {
        border-top: solid thin #ddd;
        padding: 1em 0em 0em 0em;
      }
      :host(.reply-comment) {
        padding: 1em 1em 0em 1em;
      }
      .section-reply.hiden {
        padding: 0 0 1em 0;
      }
      .section-reply.shown slot{
        display: block;
      }
      .section-reply.hiden slot{
        display: none;
      }
      .toggle-button {
        cursor: pointer;
      }
    `;
  }

  render() {

    const toggleButton = (isShown: boolean, replyCount:number) => {
      return (isShown) ?
      html`<span class="toggle-button to-hide-reply" @click="${this.handleToggle}">[-]</span>` :
      html`<span class="toggle-button to-show-reply" @click="${this.handleToggle}">
      [+] ${replyCount} ${(replyCount > 1) ? 'replies hiden' : 'reply hiden'}
      </span>`;
    };

    const toggleSection = (isShown: boolean, replyCount:number) => {
      return html`
      <section class="section-reply ${(isShown) ? 'shown' : 'hiden'}">
      ${toggleButton(isShown, replyCount)}
      <slot></slot>
      </section>
      `;
    };

    const toggleTemplate = (comments: Item[], isShown:boolean, replyCount:number) =>
    (comments.length > 0) ?
    toggleSection(isShown, replyCount) : html``;

    return html`
      <article>
      <header>
      <a href="${this.baseUrl}user/${this.model.user}">${this.model.user}</a> ${this.model.time_ago}
      </header>
      <p>${until(unsafeHTML(this.model.content))}</p>
      ${toggleTemplate(this.model.comments, this.isShownReply, this.model.comments.length)}
      </article>
    `;
  }

  handleToggle(e) {
    console.log('toogle clicked');
    this.isShownReply = !this.isShownReply;
  }
}
