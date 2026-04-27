/**
 * Copyright 2026 igasparraj16
 * @license Apache-2.0, see LICENSE for full text.
 */
import { JrTeamPageBase } from "./jr-team-page-base.js";

export class JrIndyAirBearsPage extends JrTeamPageBase {

  static get tag() {
    return "jr-indy-air-bears-page";
  }

  constructor() {
    super();
    this.title = "Indy Air Bears";
    this.description = "A regional performance squad focused on speed-endurance sets and clean transition timing.";
    this.image = "https://img1.wsimg.com/isteam/ip/032ba5db-1d22-4d94-a0b5-51a48458fe73/IMG_6062.JPG/:/cr=t:22.29%25,l:0%25,w:100%25,h:74.99%25/rs=w:1240,h:620,cg:true";
    this.imageAlt = "Indy Air Bears team photo";
  }
}

globalThis.customElements.define(JrIndyAirBearsPage.tag, JrIndyAirBearsPage);