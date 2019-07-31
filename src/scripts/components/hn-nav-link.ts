import { LitElement, html, property, customElement, css } from 'lit-element';
import { Href } from '../config/types';

@customElement('hn-nav-link')
export class HnNavLink extends LitElement {
  @property() id: string;
  @property() hrefs: Href[];
  @property() baseUrl: string;

  static get styles() {
    return css`

    .custom-menu-screen {
      width: 0%;
    }
    .pure-menu-item {
      display: inline;
      padding: 0.5em;
    }
    a.pure-menu-link {
      color: white;
      text-decoration: none;
    }

    @media (max-width: 62em) {
      .custom-menu-screen {
        background-color: rgba(0, 0, 0, 0.5);
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        transition: all 0.5s;
        height: 3em;
        width: 100%;
        position: absolute;
        top: 0;
        z-index: -1;
      }
    }
    `;
  }

  constructor(outlet: HTMLElement, hrefs:Href[], baseUrl:string) {
    super();

    this.hrefs = hrefs;
    this.baseUrl = baseUrl;
    outlet.appendChild(this.shadowRoot.host);
  }

  render() {
    return html`
    <nav id=${this.id}>
        <div class="custom-menu-screen"></div>
        <ul class="pure-menu-list">
        ${this.hrefs.map(h =>
          html`
          <li class='pure-menu-item'>
          <a href="${this.baseUrl}${h.href}" class='pure-menu-link'>${h.text}</a>
          </li>
          `)}
        </ul>
    </nav>
    `;
  }
}
