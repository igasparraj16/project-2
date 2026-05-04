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
      h1 {
        color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-white));
      }
      .content {
        padding: var(--ddd-spacing-4);
        display: flex;
        flex-direction: column;
        align-items: center;
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
        team-name="Comet Skippers"
        team-description="A collegiate freestyle team known for fast footwork combos and synchronized pair routines."
        image="https://www.cometskippers.org/wp-content/uploads/2019/09/Nationals_WJR_pic3.jpg"
        team-href="/teams/comet-skippers">
      </jr-team-line>
      <jr-team-line
        team-name="Indy Air Bears"
        team-description="A regional performance squad focused on speed-endurance sets and clean transition timing."
        image="https://img1.wsimg.com/isteam/ip/032ba5db-1d22-4d94-a0b5-51a48458fe73/IMG_6062.JPG/:/cr=t:22.29%25,l:0%25,w:100%25,h:74.99%25/rs=w:1240,h:620,cg:true"
        team-href="/teams/indy-air-bears">
      </jr-team-line>
      <jr-team-line
        team-name="Bouncin' Bulldogs"
        team-description="An all-ages exhibition team blending dance choreography with advanced jump rope trick lines."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZPICp9Hq1TL7Zxjnp3Xi6rFtC49AK_4Wp4w&s"
        team-href="/teams/bouncin-bulldogs">
      </jr-team-line>
      <jr-team-line
        team-name="Rope Runners"
        team-description="A competition squad training for precision in double-under relays and three-minute speed events."
        image="https://i.ytimg.com/vi/PUWg7fXnCf0/maxresdefault.jpg"
        team-href="/teams/rope-runners">
      </jr-team-line>
      <jr-team-line
        team-name="Jammin' Jump Crew"
        team-description="A creative campus team experimenting with music-driven routines and partner-interaction sequences."
        image="https://images.squarespace-cdn.com/content/v1/542c427de4b0622ffa15f9f4/1477571391497-CYFZCN5K3QIGPLH2D36R/PAJRCC_2016_6.jpeg?format=1000w"
        team-href="/teams/jammin-jump-crew">
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