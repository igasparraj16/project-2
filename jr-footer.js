/**
 * Copyright 2026 igasparraj16
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `jr-footer`
 * 
 * @demo index.html
 * @element jr-footer
 */
export class JrFooter extends DDDSuper(LitElement) {

  static get tag() {
    return "jr-footer";
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
        color: var(--jr-text-color, var(--ddd-theme-primary));
        background-color: var(--jr-surface-color, var(--ddd-theme-accent));
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: var(--jr-footer-surface-color, #9BC1BC);
        height: 100px;
      }
      h1 span {
        font-size: var(--project-2-label-font-size, var(--ddd-font-size-s));
      }
      h1 {
        color: var(--ddd-theme-default-white);
      }
      h4 {
        color: var(--jr-footer-text-color, #203230);
        font-weight: normal;
        text-align: left;
        width: 100%;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <slot></slot>
  <h4>Izzy Gasparraj, 2026</h4>
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

globalThis.customElements.define(JrFooter.tag, JrFooter);