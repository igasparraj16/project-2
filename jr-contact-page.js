/**
 * Copyright 2026 igasparraj16
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./jr-hero.js";
import "./jr-nav-bar.js";
import "./jr-footer.js";
import "./jr-team-line.js";

/**
 * `jr-contact-page`
 * 
 * @demo index.html
 * @element jr-contact-page
 */
export class JrContactPage extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "jr-contact-page";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/project-2.ar.json", import.meta.url).href +
        "/../",
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--jr-text-color, var(--ddd-theme-primary));
        background-color: var(--jr-surface-color, var(--ddd-theme-accent));
        font-family: var(--ddd-font-navigation);
      }
      h3 span {
        font-size: var(--project-2-label-font-size, var(--ddd-font-size-s));
      }
      h1 {
        color: var(--jr-text-color, var(--ddd-theme-default-coalyGray));
      }
      .content {
        padding: var(--ddd-spacing-4) var(--ddd-spacing-4) var(--ddd-spacing-8);
        max-width: 900px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: var(--ddd-spacing-4);
      }
      .content p {
        margin: 0;
        color: var(--jr-text-color, var(--ddd-theme-default-coalyGray));
        line-height: var(--ddd-lh-140);
        font-size: var(--ddd-font-size-s);
      }
      .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: var(--ddd-spacing-4);
      }
      .card {
        padding: var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-lg);
        background-color: var(--jr-card-surface-color, #F3F0E8);
        border: 1px solid var(--jr-card-border-color, rgba(93, 87, 107, 0.15));
      }
      .card h2 {
        margin: 0 0 var(--ddd-spacing-2);
        color: var(--jr-text-color, var(--ddd-theme-default-coalyGray));
        font-size: var(--ddd-font-size-m);
      }
      .card p,
      .card a {
        font-size: var(--ddd-font-size-s);
      }
      .card a {
        color: var(--jr-text-color, var(--ddd-theme-default-coalyGray));
        text-decoration: none;
        font-weight: var(--ddd-font-weight-bold);
      }
      .card a:hover,
      .card a:focus-visible {
        text-decoration: underline;
      }
      .note {
        padding: var(--ddd-spacing-4);
        border-left: 6px solid #5D576B;
        border-radius: var(--ddd-radius-lg);
        background-color: var(--jr-note-surface-color, #FFF8EC);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
    <jr-nav-bar></jr-nav-bar>
    <div class="content">
      <h1>Contact</h1>
      <p>
        Have a question about the Elite Jump Rope League, an upcoming event, or
        one of the teams? Use the contact details below to reach the right
        group and we’ll point you in the right direction.
      </p>
      <div class="contact-grid">
        <div class="card">
          <h2>General Inquiries</h2>
          <p>Email: <a href="mailto:info@ejrl.org">info@ejrl.org</a></p>
          <p>For league information, event questions, and public updates.</p>
        </div>
        <div class="card">
          <h2>Team Questions</h2>
          <p>Email: <a href="mailto:teams@ejrl.org">teams@ejrl.org</a></p>
          <p>For team schedules, rosters, and competition coordination.</p>
        </div>
        <div class="card">
          <h2>Media and Partnerships</h2>
          <p>Email: <a href="mailto:media@ejrl.org">media@ejrl.org</a></p>
          <p>For press, sponsorships, and collaboration opportunities.</p>
        </div>
      </div>
      <div class="note">
        <p>
          Please include your name, topic, and the event or team you’re
          asking about so your message can be routed quickly.
        </p>
      </div>
    </div>
    <jr-footer></jr-footer>
  <slot></slot>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(JrContactPage.tag, JrContactPage);