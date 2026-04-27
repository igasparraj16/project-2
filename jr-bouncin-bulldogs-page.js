/**
 * Copyright 2026 igasparraj16
 * @license Apache-2.0, see LICENSE for full text.
 */
import { JrTeamPageBase } from "./jr-team-page-base.js";

export class JrBouncinBulldogsPage extends JrTeamPageBase {

  static get tag() {
    return "jr-bouncin-bulldogs-page";
  }

  constructor() {
    super();
    this.title = "Bouncin' Bulldogs";
    this.description = "An all-ages exhibition team blending dance choreography with advanced jump rope trick lines.";
    this.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZPICp9Hq1TL7Zxjnp3Xi6rFtC49AK_4Wp4w&s";
    this.imageAlt = "Bouncin' Bulldogs team photo";
  }
}

globalThis.customElements.define(JrBouncinBulldogsPage.tag, JrBouncinBulldogsPage);