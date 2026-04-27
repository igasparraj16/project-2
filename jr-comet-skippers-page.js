/**
 * Copyright 2026 igasparraj16
 * @license Apache-2.0, see LICENSE for full text.
 */
import { JrTeamPageBase } from "./jr-team-page-base.js";

export class JrCometSkippersPage extends JrTeamPageBase {

  static get tag() {
    return "jr-comet-skippers-page";
  }

  constructor() {
    super();
    this.title = "Comet Skippers";
    this.description = "A collegiate freestyle team known for fast footwork combos and synchronized pair routines.";
    this.image = "https://www.cometskippers.org/wp-content/uploads/2019/09/Nationals_WJR_pic3.jpg";
    this.imageAlt = "Comet Skippers team photo";
  }
}

globalThis.customElements.define(JrCometSkippersPage.tag, JrCometSkippersPage);