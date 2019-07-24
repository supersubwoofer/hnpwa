import { LitElement, html, property, customElement } from 'lit-element';

@customElement('view-about')
export class ViewAbout extends LitElement {
  @property() name = 'About';

  render() {
    return html`<p>Route, ${this.name}!</p>`;
  }
}
