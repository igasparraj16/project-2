/**
 * Copyright 2026 igasparraj16
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `jr-nav-bar`
 * 
 * @demo index.html
 * @element jr-nav-bar
 */
export class JrNavBar extends DDDSuper(LitElement) {

  static get tag() {
    return "jr-nav-bar";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
      homeLink: "/",
      aboutLink: "/about",
      teamsLink: "/teams",
      contactLink: "/contact"
    };
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
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--project-2-label-font-size, var(--ddd-font-size-s));
      }
      .bar-items {
        display: flex;
        justify-content: center;
        flex-grow: 1;
        justify-content: space-between;
        align-items: center;
      }
      .nav-links {
      display: flex;
      justify-content: space-between;
      margin-top: var(--ddd-spacing-4);
      gap: var(--ddd-spacing-8);
      }
      .logo {
        height: 100px;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <div class="bar-items">
    <img src="https://www.sportaccord.sport/iff-2023/wp-content/uploads/sites/2/2020/11/IJRU.png" alt="IJRU Logo" class="logo">
    <div class="nav-links">
        <a href=${this.t.homeLink}>Home</a>
        <a href=${this.t.aboutLink}>About</a>
        <a href=${this.t.teamsLink}>Teams</a>
        <a href=${this.t.contactLink}>Contact</a>
    </div>
  </div>
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

globalThis.customElements.define(JrNavBar.tag, JrNavBar);