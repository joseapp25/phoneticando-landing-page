/**
 * <infinite-carousel>
 * A dependency-free, reusable infinite text carousel web component.
 * Drop this script on any page and use the <infinite-carousel> tag.
 *
 * USAGE — Option A: pass items as children (recommended, supports HTML)
 * ------------------------------------------------------------------
 * <infinite-carousel speed="20">
 *   <span>Fast shipping</span>
 *   <span>24/7 support</span>
 *   <span>Free returns</span>
 * </infinite-carousel>
 *
 * USAGE — Option B: pass items as a JSON attribute
 * ------------------------------------------------------------------
 * <infinite-carousel
 *   speed="15"
 *   items='["Fast shipping", "24/7 support", "Free returns"]'>
 * </infinite-carousel>
 *
 * ATTRIBUTES (all optional)
 * ------------------------------------------------------------------
 * speed            seconds for one full loop            default: 20
 * gap              spacing between items (any CSS unit)  default: 2.5rem
 * pause-on-hover   "true" | "false"                      default: true
 * direction        "left" | "right"                      default: left
 * separator        character/text between items          default: •
 * items            JSON array of strings (if no children) default: none
 *
 * THEMING
 * ------------------------------------------------------------------
 * Set these CSS custom properties on the element (or an ancestor):
 *   --carousel-bg
 *   --carousel-text
 *   --carousel-accent   (used for the separator)
 */

class InfiniteCarousel extends HTMLElement {
  static get observedAttributes() {
    return ['speed', 'gap', 'pause-on-hover', 'direction', 'separator', 'items'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Capture original light-DOM children (if any) before we touch the DOM,
    // since setting innerHTML on connectedCallback would otherwise wipe them.
    if (!this._items) {
      this._items = Array.from(this.children).map(el => el.outerHTML.trim());
    }
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }

  getItems() {
    // Priority: light-DOM children > items="" attribute > fallback demo text
    if (this._items && this._items.length) return this._items;

    const attr = this.getAttribute('items');
    if (attr) {
      try {
        const parsed = JSON.parse(attr);
        if (Array.isArray(parsed)) return parsed.map(String);
      } catch (e) {
        console.warn('<infinite-carousel>: items attribute is not valid JSON', e);
      }
    }
    return ['Add items as children or via the items="" attribute'];
  }

  render() {
    const speed = parseFloat(this.getAttribute('speed')) || 20;
    const gap = this.getAttribute('gap') || '2.5rem';
    const pauseOnHover = this.getAttribute('pause-on-hover') !== 'false';
    const direction = this.getAttribute('direction') === 'right' ? 'reverse' : 'normal';
    const separator = this.hasAttribute('separator') ? this.getAttribute('separator') : '•';
    const items = this.getItems();

    const itemsHtml = items
      .map(item => `<div class="carousel-item">${item}</div>`)
      .join('');

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          --_bg: var(--graycool0);
          --_text: var(--carousel-text, inherit);
          --_accent: var(--carousel-accent, var(--cerulean600));
        }
        .wrap {
          overflow: hidden;
          background: var(--_bg);
          padding: 1.5rem 0;
          -webkit-mask-image: linear-gradient(to right, transparent, black 4%, black 96%, transparent);
                  mask-image: linear-gradient(to right, transparent, black 4%, black 96%, transparent);
        }
        .track {
          display: flex;
          width: max-content;
          animation: scroll ${speed}s linear infinite;
          animation-direction: ${direction};
        }
        ${pauseOnHover ? `.wrap:hover .track { animation-play-state: paused; }` : ''}
        .carousel-item {
          flex: 0 0 auto;
          padding: 0 calc(${gap} / 2);
          color: var(--graycool1000);
          font-family: var(--font-dm-sans);
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: ${gap};
          font-size: 1.4rem;
          font-weight: 600;
        }
        ${separator ? `
        .carousel-item::after {
          content: "${separator}";
          color: var(--_accent);
          font-size: 1rem;
        }` : ''}
        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .track { animation: none; }
        }
      </style>
      <div class="wrap">
        <div class="track">
          ${itemsHtml}
          ${itemsHtml}
        </div>
      </div>
    `;
  }
}

customElements.define('infinite-carousel', InfiniteCarousel);