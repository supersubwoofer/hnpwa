import { LitElement, html, property, customElement } from 'lit-element';
import { User } from '../types';
import { getUser } from '../network/api.resource';

@customElement('view-user')
export class ViewUser extends LitElement {
  @property() model:User;

  render() {
    return html`
    <h1 class="user-profile">User Profile</h1>
    <p>${this.model.id} joined ${this.model.created} and has ${this.model.karma} karma.</p>
      `;
  }

  onBeforeEnter = (location, commands, router) => {
    if (location.params != null && typeof location.params.id === 'string') {
      const uid = location.params.id;
      getUser(uid)
        .then((res) => { return res; })
        .then((body) => {
          this.model = body.result;
        });
    }
  }
}
