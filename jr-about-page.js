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
 * `jr-about-page`
 * 
 * @demo index.html
 * @element jr-about-page
 */
export class JrAboutPage extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "jr-about-page";
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
      .highlight {
        padding: var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-lg);
        background-color: var(--jr-card-surface-color, #F3F0E8);
        border-left: 6px solid #5D576B;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
    <jr-nav-bar></jr-nav-bar>
    <div class="content">
      <h1>About</h1>
      <p>
        Since 1973, competitive jump rope and skipping has grown from a niche
        athletic activity into a global sport with strong technical, artistic,
        and speed-based events. Over time, athletes, coaches, and organizers
        helped shape the sport into a modern international competition with a
        clear structure and a worldwide community.
      </p>

      <div class="highlight">
        <p>
          Together, those organizations have produced 21 world championships.
          EJRL now holds Observer Status and continues building a
          path toward greater recognition in the Olympic movement.
        </p>
      </div>
      <p>
        EJRL is an independent, non-political sports governance organization
         recognized as a 501(c)(3) nonprofit.
      </p>
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

globalThis.customElements.define(JrAboutPage.tag, JrAboutPage);