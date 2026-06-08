class InlineAnchor extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['href', 'target', 'label'];
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const href   = this.getAttribute('href')   || '#';
        const target = this.getAttribute('target') || '_blank';
        const label  = this.getAttribute('label')  || '';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline;
                }

                .inline-anchor {
                    text-decoration: none;
                    color: var(--sunset600);
                    fill: var(--sunset600);
                    transition-duration: 0.2s;
                    font-weight: 600;
                    font-size: 16px;
                    display: inline-flex;
                    align-items: baseline;
                    gap: 4px;
                    cursor: pointer;
                }

                .inline-anchor:hover {
                    color: var(--sunset400);
                    fill: var(--sunset400);
                    transition-duration: 0.2s;
                }

                .inline-anchor:active {
                    color: var(--sunset200);
                    fill: var(--sunset200);
                    transition-duration: 0.2s;
                }

                .inline-anchor svg {
                    width: 12px;
                    height: 12px;
                    flex-shrink: 0;
                    align-self: center;
                }

                .label {
                    display: inline;
                }
            </style>

            <a class="inline-anchor" href="${href}" target="${target}" rel="noopener noreferrer">
                <span class="label">
                    ${label}<slot></slot>
                </span>
                <svg viewBox="0 0 1024 1024" aria-hidden="true">
                    <path d="M384 170.67H170.667V853.336H853.333V640.003H938.667V938.67H85.333V85.3359H384V170.67ZM938.667 512.003H853.333V231.016L414.173 670.176L353.833 609.836L792.999 170.67H512V85.3359H938.667V512.003Z" />
                </svg>
            </a>
        `;
    }
}

customElements.define('inline-anchor', InlineAnchor);