import { LitElement, html, property, customElement, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { until } from 'lit-html/directives/until.js';
import { Item } from '../types';

@customElement('hn-comment')
export class HnComment extends LitElement {
  @property() baseUrl: string = '/';
  @property() model: Item;
  @property() isHideReply:boolean = false;

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
    `;
  }

  render() {

    const toggleButton = (isShown: boolean) => {
      return (isShown) ? html`<span class="to-show-reply">[-]</span>` :
      html`<span class="to-hide-reply">[-]</span>`;
    };
    const toggle = (this.model.comments_count > 0) ? toggleButton(this.isHideReply) : html``;

    return html`
      <article>
      <header>
      <a href="${this.baseUrl}user/${this.model.user}">${this.model.user}</a> ${this.model.time_ago}
      </header>
      <p>${until(unsafeHTML(this.model.content))}</p>
      <section class="section-reply">${toggle}<slot></slot></section>
      </article>
    `;
  }
}
