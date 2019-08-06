import { LitElement, html, property, customElement, css } from 'lit-element';
import { Href } from '../config/types';

@customElement('hn-nav-link')
export class HnNavLink extends LitElement {
  @property() id: string;
  @property() hrefs: Href[];
  @property() baseUrl: string;
  @property() currentLocation: string;

  static get styles() {
    return css`

    .pure-menu-item {
      display: inline;
      padding: 0.5em;
    }
    a.pure-menu-link {
      color: #fff;
      text-decoration: none;
    }
    .current-view {
      text-decoration: underline;
    }

    @media (max-width: 62em) {
      .pure-menu-item {
        display: block;
        padding: 0.5em;
      }
      a.pure-menu-link {
        color: #550021;
      }
    }
    `;
  }

  constructor(outlet: HTMLElement, hrefs:Href[], baseUrl:string) {
    super();

    this.hrefs = hrefs;
    this.baseUrl = baseUrl;
    if (hrefs.length > 0) {
      this.currentLocation = `${this.baseUrl}${hrefs[0].href}`;
    }

    outlet.appendChild(this.shadowRoot.host);
  }

  render() {
    const currentLinkClass = (currentLocation:string, baseUrl:string, item:Href) => {
      return (currentLocation === `${baseUrl}${item.href}`) ? 'current-view' : '';
    };

    return html`
    <nav id=${this.id}>
        <ul class="pure-menu-list">
        ${this.hrefs.map(h =>
          html`
          <li class="pure-menu-item ${currentLinkClass(this.currentLocation, this.baseUrl, h)}">
          <a href="${this.baseUrl}${h.href}" class='pure-menu-link' @click="${this.handleNavigate}">
          ${h.text}</a>
          </li>
          `)}
        </ul>
    </nav>
    `;
  }

  handleNavigate(e) {
    this.currentLocation = e.target.pathname;
  }
}
