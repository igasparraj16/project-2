/**
 * Copyright 2026 igasparraj16
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./jr-nav-bar.js";
import "./jr-footer.js";
import "./jr-button.js";

export class JrTeamPageBase extends DDDSuper(I18NMixin(LitElement)) {

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      description: { type: String },
      image: { type: String },
      imageAlt: { type: String, attribute: "image-alt" },
      backHref: { type: String, attribute: "back-href" },
    };
  }

  constructor() {
    super();
    this.title = "";
    this.description = "";
    this.image = "";
    this.imageAlt = "Team image";
    this.backHref = "/teams";
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

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .content {
        padding: var(--ddd-spacing-4);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--ddd-spacing-4);
      }
      h1 {
        margin: 0;
        color: var(--ddd-theme-default-coalyGray);
        text-align: center;
      }
      .hero {
        width: min(100%, 900px);
        display: flex;
        flex-direction: column;
        gap: var(--ddd-spacing-4);
      }
      .team-image {
        width: 100%;
        max-width: 900px;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        border-radius: var(--ddd-radius-lg);
      }
      .description {
        margin: 0;
        color: var(--ddd-theme-default-coalyGray);
        line-height: var(--ddd-lh-140);
        text-align: left;
      }
      a {
        align-self: flex-start;
        text-decoration: none;
      }
    `];
  }

  render() {
    return html`
<div class="wrapper">
  <jr-nav-bar></jr-nav-bar>
  <main class="content">
    <h1>${this.title}</h1>
    <section class="hero">
      <img class="team-image" src="${this.image}" alt="${this.imageAlt}">
      <p class="description">${this.description}</p>
      <a href="${this.backHref}">
        <jr-button button-text="Back to Teams"></jr-button>
      </a>
    </section>
  </main>
  <jr-footer></jr-footer>
  <slot></slot>
</div>`;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}