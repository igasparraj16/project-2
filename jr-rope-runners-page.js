/**
 * Copyright 2026 igasparraj16
 * @license Apache-2.0, see LICENSE for full text.
 */
import { JrTeamPageBase } from "./jr-team-page-base.js";

export class JrRopeRunnersPage extends JrTeamPageBase {

  static get tag() {
    return "jr-rope-runners-page";
  }

  constructor() {
    super();
    this.title = "Rope Runners";
    this.description = "A competition squad training for precision in double-under relays and three-minute speed events.";
    this.image = "https://i.ytimg.com/vi/PUWg7fXnCf0/maxresdefault.jpg";
    this.imageAlt = "Rope Runners team photo";
  }
}

globalThis.customElements.define(JrRopeRunnersPage.tag, JrRopeRunnersPage);