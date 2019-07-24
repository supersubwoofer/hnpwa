import { LitElement, html, property, customElement } from 'lit-element';

@customElement('view-new')
export class ViewNew extends LitElement {
  @property() name = 'New';

  render() {
    return html`<p>Route, ${this.name}!</p>`;
  }
}
