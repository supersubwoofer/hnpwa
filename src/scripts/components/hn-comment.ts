import { LitElement, html, property, customElement } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { until } from 'lit-html/directives/until.js';
import { Item } from '../types';

@customElement('hn-comment')
export class HnComment extends LitElement {
  @property() baseUrl: string = '/';
  @property() model: Item;

  render() {

    return html`
      <article>
      <header>
      <a href="${this.baseUrl}user/${this.model.user}">${this.model.user}</a> ${this.model.time_ago}
      </header>
      <p>${until(unsafeHTML(this.model.content))}</p>
      <slot></slot>
      </article>
    `;
  }
}
