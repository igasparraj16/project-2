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
 * `jr-teams-page`
 * 
 * @demo index.html
 * @element jr-teams-page
 */
export class JrTeamsPage extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "jr-teams-page";
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
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      h3 span {
        font-size: var(--project-2-label-font-size, var(--ddd-font-size-s));
      }
      .content {
        padding: var(--ddd-spacing-4);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
    <jr-nav-bar></jr-nav-bar>
    <div class="content">
      <h1>Teams</h1>
      <jr-team-line
        team-name="Penn State Blue Loop"
        team-description="A collegiate freestyle team known for fast footwork combos and synchronized pair routines."
        image="https://images.unsplash.com/photo-1526232761682-d26e03ac148e">
      </jr-team-line>
      <jr-team-line
        team-name="Lions Rope Collective"
        team-description="A regional performance squad focused on speed-endurance sets and clean transition timing."
        image="https://images.unsplash.com/photo-1517649763962-0c623066013b">
      </jr-team-line>
      <jr-team-line
        team-name="Midnight Turners"
        team-description="An all-ages exhibition team blending dance choreography with advanced jump rope trick lines."
        image="https://images.unsplash.com/photo-1461896836934-ffe607ba8211">
      </jr-team-line>
      <jr-team-line
        team-name="Keystone Flight"
        team-description="A competition squad training for precision in double-under relays and three-minute speed events."
        image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438">
      </jr-team-line>
      <jr-team-line
        team-name="Nittany Rhythm Crew"
        team-description="A creative campus team experimenting with music-driven routines and partner-interaction sequences."
        image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b">
      </jr-team-line>
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

globalThis.customElements.define(JrTeamsPage.tag, JrTeamsPage);