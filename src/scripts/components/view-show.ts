import { LitElement, html, property, customElement } from 'lit-element';

@customElement('view-show')
export class ViewShow extends LitElement {
  @property() name = 'Show';

  render() {
    return html`<p>Route, ${this.name}!</p>`;
  }
}
