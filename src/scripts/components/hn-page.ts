import { LitElement, html, property, customElement } from 'lit-element';

@customElement('hn-page')
export class HnPage extends LitElement {
  @property() page:number = 1;
  @property() max:number = 1;

  render() {
    const previous =
      (this.page === 1) ?
      html`` : html`<a href="/top/${this.page - 1}">Previous</a>`;

    const next =
      (this.page === this.max) ?
      html`` : html`<a href="/top/${this.page + 1}">Next</a>`;

    return html`
    ${previous}
    ${this.page}/${this.max}
    ${next}
    `;
  }
}
