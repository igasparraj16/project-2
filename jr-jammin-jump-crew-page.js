/**
 * Copyright 2026 igasparraj16
 * @license Apache-2.0, see LICENSE for full text.
 */
import { JrTeamPageBase } from "./jr-team-page-base.js";

export class JrJamminJumpCrewPage extends JrTeamPageBase {

  static get tag() {
    return "jr-jammin-jump-crew-page";
  }

  constructor() {
    super();
    this.title = "Jammin' Jump Crew";
    this.description = "A creative campus team experimenting with music-driven routines and partner-interaction sequences.";
    this.image = "https://images.squarespace-cdn.com/content/v1/542c427de4b0622ffa15f9f4/1477571391497-CYFZCN5K3QIGPLH2D36R/PAJRCC_2016_6.jpeg?format=1000w";
    this.imageAlt = "Jammin' Jump Crew team photo";
  }
}

globalThis.customElements.define(JrJamminJumpCrewPage.tag, JrJamminJumpCrewPage);