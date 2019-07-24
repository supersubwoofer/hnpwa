import { LitElement, html, property, customElement } from 'lit-element';
import { getTop } from '../network';
import { FeedItem } from '../types';

@customElement('view-top')
export class ViewTop extends LitElement {
  @property() name = 'Top';
  @property({ type: Array }) model;

  render() {
    return html`<ul>${this.model.map(i => html`<li>${i.title}</li>`)}</ul>`;
  }

  onBeforeEnter = (location, commands, router) => {
    getTop('/news/1.json')
      .then((res) => { return res; })
      .then((body) => {
        this.model = body.result;
      });
  }
}
