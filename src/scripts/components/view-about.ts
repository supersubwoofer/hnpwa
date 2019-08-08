import { LitElement, html, customElement, css } from 'lit-element';

@customElement('view-about')
export class ViewAbout extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 1em 2em;
        color: #550021;
      }
      a {
        color: #550021;
        font-weight: bold;
        text-decoration: none;
      }
      .button-link {
        padding: .5em 1em;
        border-radius: 1em;
        background: #550021;
        color: #fff;
        margin: 0 1em 0 0;
      }
      .demo-links {
        padding: 1em 0;
      }
    `;
  }

  render() {
    return html`
    <section>
      <h1>Lit-Element Web Components HN-PWA</h1>
      <a href="https://supersubwoofer.github.io/myblog/hnpwa/">wing/hnpwa</a>
    </section>
    <section>
      <h2>Audits</h2>
      <ul>
        <li><strong>Lighthouse:</strong> 93/100</li>
        <li><strong>Interactive (Emerging Markets):</strong> 2.3s</li>
        <li><strong>Interactive (Faster 3G):</strong> 1.9s</li>
      </ul>
    </section>
    <section>
      <h2>Technologies</h2>
      <ul>
        <li><strong>Framework/UI libraries:</strong> Lit-Elememts, Vaadin Router, TypedScript</li>
        <li><strong>Bundler:</strong> Webpack</li>
        <li><strong>Service worker:</strong> Application Shell, Workbox caching</li>
        <li><strong>Server-side rendering:</strong> No</li>
        <li><strong>API:</strong> node-hnapi</li>
        <li><strong>Hosting:</strong> Github Page</li>
        <li><strong>Author:</strong> Chun Wing</li>
      </ul>
    </section>
    <div class="demo-links">
      <a class="button-link" href="https://supersubwoofer.github.io/myblog/hnpwa/">View App</a>
      <a class="button-link" href="">Source Code</a>
    </div>
    `;
  }
}
