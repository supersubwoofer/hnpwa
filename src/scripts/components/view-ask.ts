import { LitElement, html, property, customElement } from 'lit-element';

@customElement('view-ask')
export class ViewAsk extends LitElement {
  @property() name = 'Ask';

  render() {
    return html`<p>Route, ${this.name}!</p>`;
  }
}
