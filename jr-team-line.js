/**
 * Copyright 2026 igasparraj16
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./jr-button.js";

/**
 * `jr-team-line`
 * 
 * @demo index.html
 * @element jr-team-line
 */
export class JrTeamLine extends DDDSuper(LitElement) {

  static get tag() {
    return "jr-team-line";
  }

  constructor() {
    super();
    this.image = "https://images.unsplash.com/photo-1521412644187-c49fa049e84d";
    this.teamName = "Team Name";
    this.teamDescription = "Team description goes here.";
    this.teamHref = "/teams";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      image: { type: String },
      teamName: { type: String, attribute: "team-name" },
      teamDescription: { type: String, attribute: "team-description" },
      teamHref: { type: String, attribute: "team-href" },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-4) 0;
        padding: var(--ddd-spacing-4);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-lg);
      }
      .team-image {
        width: 220px;
        height: 220px;
        object-fit: cover;
        border-radius: var(--ddd-radius-md);
        flex: 0 0 auto;
      }
      .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--ddd-spacing-2);
        min-width: 0;
        text-align: left;
      }
      a {
        align-self: flex-start;
        text-decoration: none;
      }
      .team-name {
        color: var(--ddd-theme-default-coalyGray);
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-bold);
        line-height: var(--ddd-lh-120);
        margin: 0;
      }
      .team-description {
        color: var(--ddd-theme-default-coalyGray);
        font-size: var(--ddd-font-size-3xs);
        margin: 0;
        line-height: var(--ddd-lh-120);
        max-width: 70ch;
      }
      @media (max-width: calc(var(--ddd-breakpoint-sm, 600px) - 1px)) {
        .wrapper {
          align-items: flex-start;
        }
        .team-image {
          width: 160px;
          height: 160px;
        }
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <img class="team-image" src="${this.image}" alt="${this.teamName}">
  <div class="content">
    <h3 class="team-name">${this.teamName}</h3>
    <p class="team-description">${this.teamDescription}</p>
    <a href="${this.teamHref}">
      <jr-button button-text="View Team"></jr-button>
    </a>
  </div>
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

globalThis.customElements.define(JrTeamLine.tag, JrTeamLine);