/**
 * Copyright 2026 igasparraj16
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./jr-button.js";

/**
 * `jr-hero`
 * 
 * @demo index.html
 * @element jr-hero
 */
export class JrHero extends DDDSuper(LitElement) {

  static get tag() {
    return "jr-hero";
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
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        position: relative;
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url('https://images.squarespace-cdn.com/content/v1/5bc1ef4629f2cc29fcf63eaa/1552470019493-DKKV7YRQU9YH6G4G2S6W/IMG_4914_0.jpg');
        background-size: cover;
        background-position: center;
        height: 500px;
        overflow: hidden;
      }
      .wrapper::before {
        content: "";
        position: absolute;
        inset: 0;
        background: var(--jr-surface-color, var(--ddd-theme-default-black));
        opacity: 0.42;
      }
      .hero-content {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--ddd-spacing-3);
        text-align: center;
        max-width: 44rem;
      }
      h1 span {
        font-size: var(--project-2-label-font-size, var(--ddd-font-size-s));
      }
      h1 {
        color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-white));
        font-size: clamp(2.1rem, 4.6vw, 4.25rem);
        line-height: 1.05;
        margin: 0;
      }
      .subtitle {
        margin: 0;
        color: light-dark(var(--ddd-theme-default-coalyGray), #8FD1FF);
        font-size: clamp(0.72rem, 1.35vw, 0.95rem);
        font-weight: var(--ddd-font-weight-bold);
        letter-spacing: 0.12em;
      }
      .about-link {
        text-decoration: none;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <div class="hero-content">
    <p class="subtitle">THE PREMIERE JUMP ROPE LEAGUE, RIGHT IN YOUR BACKYARD</p>
    <h1>${this.title}</h1>
    <a class="about-link" href="/about">
      <jr-button button-text="About"></jr-button>
    </a>
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

globalThis.customElements.define(JrHero.tag, JrHero);