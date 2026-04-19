/**
 * Copyright 2026 igasparraj16
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `jr-button`
 * 
 * @demo index.html
 * @element jr-button
 */
export class JrButton extends DDDSuper(LitElement) {

  static get tag() {
    return "jr-button";
  }

  constructor() {
    super();
    this.buttonText = "button";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      "button-text": "button"
    };
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      buttonText: { type: String, attribute: "button-text" },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: inline-block;
        color: var(--ddd-theme-primary);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2) 0;
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        display: inline-flex;
        width: fit-content;
        align-items: center;
        background-color: #5D576B;
        border-radius: 9999px;
      }
      h1 span {
        font-size: var(--project-2-label-font-size, var(--ddd-font-size-s));
      }
      h1 {
        color: var(--ddd-theme-default-white);
      }
      h4 {
        color: var(--ddd-theme-default-white);
        font-size: var(--ddd-font-size-4xs);
        margin: 0;
        line-height: var(--ddd-lh-120);
      }

    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <h4>${this.buttonText || this.t["button-text"]}</h4>
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

globalThis.customElements.define(JrButton.tag, JrButton);