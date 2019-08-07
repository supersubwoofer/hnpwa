import { LitElement, html, property, customElement, css } from 'lit-element';

@customElement('hn-page')
export class HnPage extends LitElement {
  @property() url: string;
  @property() page:number = 1;
  @property() max:number = 1;

  static get styles() {
    return css`
      :host {
        display: block;
        text-align: center;
        padding: 1em;
        border: 1px solid #fff;
        box-shadow: 1px 2px #eee;
        color: #550021;
      }
      .page-link {
        padding: 1em;
        text-decoration: none;
        color: #550021;
      }
      a.disabled {
        opacity: .3;
        pointer-events: none;
      }
    `;
  }

  render() {
    const previous =
      (this.page === 1) ?
      html`<a class="page-link disabled">< prev</a>` :
      html`<a class="page-link" href="${this.url}${this.page - 1}">< prev</a>`;

    const next =
      (this.page === this.max) ?
      html`<a class="page-link disabled">next ></a>` :
      html`<a class="page-link" href="${this.url}${this.page + 1}">next ></a>`;

    return html`
    ${previous}
    <span>${this.page}/${this.max}</span>
    ${next}
    `;
  }
}
