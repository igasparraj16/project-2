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
    this.navItems = [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/teams", label: "Teams" },
      { href: "/contact", label: "Contact" },
    ];
    this.teamNavItems = [];
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      navItems: { type: Array },
      teamNavItems: { type: Array },
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
        gap: var(--ddd-spacing-4);
        flex-wrap: wrap;
      }
      .nav-item {
        position: relative;
      }
      .nav-links a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        border-radius: 9999px;
        background-color: #5D576B;
        color: var(--ddd-theme-default-white);
        text-decoration: none;
        font-weight: var(--ddd-font-weight-bold);
        line-height: 1;
        transition: transform 0.15s ease, background-color 0.15s ease;
      }
      .nav-links a:hover,
      .nav-links a:focus-visible {
        background-color: #443f51;
        transform: translateY(-1px);
        outline: none;
      }
      .dropdown {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: min(260px, calc(100vw - var(--ddd-spacing-8)));
        padding: var(--ddd-spacing-2);
        border-radius: var(--ddd-radius-lg);
        background-color: var(--ddd-theme-default-white);
        box-shadow: var(--ddd-boxShadow-md);
        display: none;
        z-index: 5;
      }
      .nav-item:hover .dropdown,
      .nav-item:focus-within .dropdown {
        display: flex;
        flex-direction: column;
        gap: var(--ddd-spacing-2);
      }
      .dropdown a {
        width: 100%;
        justify-content: flex-start;
        background-color: #F3F0E8;
        color: var(--ddd-theme-default-coalyGray);
        white-space: normal;
        box-sizing: border-box;
      }
      .dropdown a:hover,
      .dropdown a:focus-visible {
        background-color: #D8D2C5;
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
      ${this.navItems.map((item) => {
        if (item.href !== "/teams") {
          return html`<a href=${item.href}>${item.label}</a>`;
        }

        return html`
          <div class="nav-item">
            <a href=${item.href}>${item.label}</a>
            <div class="dropdown" aria-label="Teams pages">
              <a href="/teams">All Teams</a>
              ${this.teamNavItems.map(
                (team) => html`<a href=${team.href}>${team.label}</a>`,
              )}
            </div>
          </div>
        `;
      })}
    </div>
  </div>
  <slot></slot>
</div>`;
  }

  async firstUpdated() {
    await this._loadNavItemsFromOutline();
  }

  async _loadNavItemsFromOutline() {
    try {
      const response = await fetch(new URL("./data.json", import.meta.url));
      if (!response.ok) {
        return;
      }

      const data = await response.json();
      if (!Array.isArray(data?.items)) {
        return;
      }

      const outlineNavItems = data.items
        .filter((item) => item?.metadata?.nav && item?.metadata?.route)
        .sort((a, b) => Number(a.order || 0) - Number(b.order || 0))
        .map((item) => ({
          href: item.metadata.route,
          label: item.title || item.slug || "Page",
        }));

      if (outlineNavItems.length) {
        this.navItems = outlineNavItems;
      }

      this.teamNavItems = data.items
        .filter((item) => item?.metadata?.route?.startsWith("/teams/") && !item?.metadata?.nav)
        .sort((a, b) => Number(a.order || 0) - Number(b.order || 0))
        .map((item) => ({
          href: item.metadata.route,
          label: item.title || item.slug || "Team",
        }));
    }
    catch (e) {
      // Keep fallback links if outline cannot be loaded.
    }
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