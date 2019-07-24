import { LitElement, html, property, customElement } from 'lit-element';

@customElement('view-job')
export class ViewJob extends LitElement {
  @property() name = 'Job';

  render() {
    return html`<p>Route, ${this.name}!</p>`;
  }
}
