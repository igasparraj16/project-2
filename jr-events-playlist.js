/**
 * Copyright 2026 igasparraj16
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./jr-indicator.js";
import "./jr-arrow.js";

/**
 * `jr-events-playlist`
 * 
 * @demo index.html
 * @element jr-events-playlist
 */
export class PlayList extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "jr-events-playlist";
  }

  constructor() {
    super();
    this.currIndex = 0;
    this.date = "";
    this.eventTitle = "";
    this.backgroundPhoto = "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4";
    this.slides = [];
    this.visibleCount = 3;
    this._mobileMediaQuery = null;
    this._boundMediaListener = null;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      currIndex: { type: Number , reflect: true},
      date: { type: String },
      eventTitle: { type: String },
      backgroundPhoto: { type: String },
      slides: { type: Array },
      index: { type: Number },
      visibleCount: { type: Number },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        font-family: var(--ddd-font-navigation);
        padding: var(--ddd-spacing-4);
      }
      .wrapper {
        margin: var(--ddd-spacing-0);
        padding: var(--ddd-spacing-4);
      }
      .slides-grid {
        --slide-gap: var(--ddd-spacing-4);
        --visible-count: 3;
        --offset: 0;
        overflow: hidden;
      }
      .slides-track {
        display: flex;
        gap: var(--slide-gap);
        transform: translateX(calc(-1 * var(--offset) * ((100% + var(--slide-gap)) / var(--visible-count))));
        transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
      }
      .slides-track > .event-card {
        flex: 0 0 calc((100% - ((var(--visible-count) - 1) * var(--slide-gap))) / var(--visible-count));
      }
      .event-card {
        position: relative;
        min-height: 360px;
        box-sizing: border-box;
        border-radius: var(--ddd-radius-lg);
        border-color: var(--ddd-theme-default-limestoneMaxLight);
        border-width: var(--ddd-border-size-sm);
        border-style: solid;
        box-shadow: var(--ddd-boxShadow-sm);
        overflow: hidden;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      .overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.55) 100%);
      }
      .content {
        position: relative;
        z-index: 1;
        min-height: 360px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: var(--ddd-spacing-6);
        color: var(--ddd-theme-default-white);
      }
      .meta {
        display: grid;
        gap: var(--ddd-spacing-2);
        align-content: start;
      }
      .date {
        margin: var(--ddd-spacing-0);
        display: inline-flex;
        width: fit-content;
        padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
        border-radius: var(--ddd-radius-rounded);
        background: rgba(0, 0, 0, 0.4);
        font-size: var(--ddd-font-size-5xs);
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .event-title {
        margin: var(--ddd-spacing-0);
        max-width: 18ch;
        font-size: var(--ddd-font-size-l);
        line-height: var(--ddd-lh-100);
        text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
      }
      .controls {
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-4);
        min-height: 72px;
        margin-top: var(--ddd-spacing-4);
      }
      jr-indicator {
        flex: 1 1 auto;
        min-width: 0;
      }
      @media (max-width: calc(var(--ddd-breakpoint-md, 768px) - 1px)) {
        :host {
          width: 100%;
          padding: var(--ddd-spacing-2);
        }
        .wrapper {
          margin: var(--ddd-spacing-0);
          padding: var(--ddd-spacing-0);
        }
        .slides-grid {
          --visible-count: 1;
          --slide-gap: var(--ddd-spacing-3);
        }
        .event-card,
        .content {
          min-height: 360px;
          padding: var(--ddd-spacing-4);
        }
        .event-title {
          font-size: var(--ddd-font-size-m);
          max-width: 14ch;
        }
      }
      .arrow-wrapper {
        position: relative;
        flex: 0 0 auto;
      }
      @media (prefers-reduced-motion: reduce) {
        .slides-track {
          transition: none;
        }
      }
    `];
  }

  // Lit render the HTML
  render() {
    const maxStartIndex = this._getMaxStartIndex();
    const arrowTotal = maxStartIndex + 1;
    const pageSlides = this.slides.slice(0, arrowTotal);

    return html`
      <div class="wrapper">
        <div class="slides-grid">
          <div class="slides-track" style="--offset: ${this.currIndex}; --visible-count: ${this.visibleCount};">
          ${this.slides.map((slide) => html`
            <article class="event-card" style="background-image: url('${slide.backgroundPhoto || "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4"}')">
              <div class="overlay"></div>
              <div class="content">
                <div class="meta">
                  <p class="date">${this._formatDate(slide.date)}</p>
                  <h3 class="event-title">${slide.eventTitle || "Event Title"}</h3>
                </div>
              </div>
            </article>
          `)}
          </div>
        </div>
        <div class="controls">
          <jr-indicator
            .total=${arrowTotal}
            .currIndex=${this.currIndex}
            .thumbnails=${pageSlides.map((slide) => slide.backgroundPhoto)}
            .thumbnailFallbacks=${pageSlides.map((slide) => slide.backgroundPhoto)}
            .thumbnailAlts=${pageSlides.map((slide, index) => slide.eventTitle || `Slide group ${index + 1}`)}
            @jr-indicator-index-changed=${this._handleIndexChange}>
          </jr-indicator>
          <div class="arrow-wrapper">
            <jr-arrow
              .index=${this.currIndex}
              .total=${arrowTotal}
              @prev-clicked=${this.back}
              @next-clicked=${this.next}>
            </jr-arrow>
          </div>
        </div>
        ${!this.slides.length ? html`
          <div class="slides-grid">
            <article class="event-card" style="background-image: url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4')">
              <div class="overlay"></div>
              <div class="content">
                <div class="meta">
                  <p class="date">Date TBA</p>
                  <h3 class="event-title">Event Title</h3>
                </div>
              </div>
            </article>
          </div>
        ` : ""}
            </div>
    `;
  }

  async firstUpdated() {
    const params = new URLSearchParams(globalThis.location.search);
    const activeIndex = Number(params.get("activeIndex"));

    if (!Number.isNaN(activeIndex) && activeIndex >= 0) {
      this.index = activeIndex;
    }

    if (this.index !== undefined) {
      this.currIndex = this.index;
    }

    await this._loadSlidesFromJson();
    this._setupResponsiveVisibleCount();

    this._updateSlides();
  }

  disconnectedCallback() {
    if (this._mobileMediaQuery && this._boundMediaListener) {
      this._mobileMediaQuery.removeEventListener("change", this._boundMediaListener);
    }
    super.disconnectedCallback();
  }

  updated(changedProperties) {
    if (changedProperties.has('currIndex')) {
      this._updateSlides();
      this._syncActiveIndexInUrl();
    }
  }

  _formatDate(rawDate) {
    if (!rawDate) {
      return "Date TBA";
    }

    const value = String(rawDate).trim();
    const usDateMatch = value.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
    let parsedDate;

    if (usDateMatch) {
      const month = Number(usDateMatch[1]) - 1;
      const day = Number(usDateMatch[2]);
      const year = Number(usDateMatch[3]);
      parsedDate = new Date(year, month, day);
    }
    else {
      const autoParsedDate = new Date(value);
      if (!Number.isNaN(autoParsedDate.getTime())) {
        parsedDate = autoParsedDate;
      }
    }

    if (!parsedDate || Number.isNaN(parsedDate.getTime())) {
      return value;
    }

    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(parsedDate);
  }

  _syncActiveIndexInUrl() {
    const url = new URL(globalThis.location.href);
    url.searchParams.set("activeIndex", String(this.currIndex));
    globalThis.history.replaceState({}, "", url);
  }

  _updateSlides() {
    if (!this.slides.length) {
      return;
    }

    const maxStartIndex = this._getMaxStartIndex();
    if (this.currIndex < 0) {
      this.currIndex = 0;
    }
    if (this.currIndex > maxStartIndex) {
      this.currIndex = maxStartIndex;
    }

    const curSlide = this.slides[this.currIndex];
    if (curSlide) {
      this.date = curSlide.date;
      this.eventTitle = curSlide.eventTitle;
      this.backgroundPhoto = curSlide.backgroundPhoto;
    } 
  }

  async _loadSlidesFromJson() {
    try {
      const response = await fetch(new URL("./data.json", import.meta.url));
      if (!response.ok) {
        return;
      }

      const data = await response.json();
      const eventItems = Array.isArray(data?.images)
        ? data.images
        : (Array.isArray(data?.events) ? data.events : data?.metadata?.events);
      if (!Array.isArray(eventItems) || eventItems.length === 0) {
        return;
      }

      this.slides = eventItems.map((item) => ({
        date: item.date || item["event-date"] || item.datePosted || "",
        eventTitle: item["event-title"] || item.eventTitle || item.title || item.caption || "",
        backgroundPhoto: item["background-photo"] || item.backgroundPhoto || item.photo || "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
      }));
    }
    catch (error) {
      this.slides = [];
    }
  }

  next() {
    const maxStartIndex = this._getMaxStartIndex();
    if (this.currIndex < maxStartIndex) {
      this.currIndex++;
    }
  }

  back() {
    if (this.currIndex > 0) {
      this.currIndex--;
    }
  }

  _handleIndexChange(e) {
    const newIndex = e.detail.index;
    const maxStartIndex = this._getMaxStartIndex();
    
    if (newIndex >= 0 && newIndex <= maxStartIndex) {
      this.currIndex = newIndex;
    }
  }

  _setupResponsiveVisibleCount() {
    this._mobileMediaQuery = globalThis.matchMedia("(max-width: 767px)");
    this._boundMediaListener = () => {
      this.visibleCount = this._mobileMediaQuery.matches ? 1 : 3;
      this._updateSlides();
    };

    this._boundMediaListener();
    this._mobileMediaQuery.addEventListener("change", this._boundMediaListener);
  }

  _getMaxStartIndex() {
    const visible = Math.max(1, Number(this.visibleCount) || 3);
    return Math.max(0, this.slides.length - visible);
  }
}

globalThis.customElements.define(PlayList.tag, PlayList);