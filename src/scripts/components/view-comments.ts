import { LitElement, html, property, customElement, TemplateResult } from 'lit-element';
import { Item } from '../types';
import { appState } from '../stateAction';
import './hn-nested-comments';

@customElement('view-comments')
export class ViewComments extends LitElement {
  @property() baseUrl: string = '/';
  @property() commentId: string;
  @property() model: Item;

  render() {

    return html`
    <hn-nested-comments .model=${this.model} .baseUrl=${this.baseUrl}>
    </hn-nested-comments>
    `;
  }

  onBeforeEnter = (location, commands, router) => {
    if (location.params != null && typeof location.params.id === 'string') {
      this.commentId = location.params.id;
    }

    if (location.baseUrl != null && location.baseUrl !== '') {
      this.baseUrl = location.baseUrl;
    }

    appState.itemCallback(this.commentId)
      .then((res) => { return res; })
      .then((body) => {
        this.model = body.result;
      });
  }
}
