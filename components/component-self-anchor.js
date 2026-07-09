class SelfAnchor extends HTMLElement {
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
        const target = this.getAttribute('target') || '_self';
        const label  = this.getAttribute('label')  || '';

        this.shadowRoot.innerHTML = `
            <style>

                .self-anchor-container {
                    display: flex;
                }

                .self-anchor {
                    text-decoration: none;
                    color: var(--sunset600);
                    fill: var(--sunset600);
                    transition-duration: 0.2s;
                    font-weight: 600;
                    font-size: 0.9rem;
                    display: inline-flex;
                    align-items: baseline;
                    gap: 4px;
                    cursor: pointer;
                }

                .self-anchor:hover {
                    color: var(--sunset400);
                    fill: var(--sunset400);
                    transition-duration: 0.2s;
                }

                .self-anchor:active {
                    color: var(--sunset200);
                    fill: var(--sunset200);
                    transition-duration: 0.2s;
                }

                .self-anchor svg {
                    width: 16px;
                    height: 16px;
                    flex-shrink: 0;
                    align-self: center;
                }

                .label {
                    display: inline;
                }
            </style>

            <div class="self-anchor-container">
                <a class="self-anchor" href="${href}" target="${target}" rel="noopener noreferrer">
                    <span class="label">
                        ${label}<slot></slot>
                    </span>
                    <svg viewBox="0 0 1024 1024" aria-hidden="true">
                        <path d="M384 170.669H170.666V853.336H853.333V640.003H938.666V938.669H85.333V85.3359H384V170.669ZM926.173 158.176L487.013 597.336H768V682.669H341.333V256.003H426.666V537.003L865.833 97.8359L926.173 158.176Z" />
                    </svg>
                </a>
            </div>

            
        `;
    }
}

customElements.define('self-anchor', SelfAnchor);