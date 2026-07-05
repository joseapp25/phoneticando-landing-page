class ComponentPricingCard extends HTMLElement {
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

            <link rel="stylesheet" href="styles/style.css">

            <style>

                .pricing-container {
                    text-align: center;
                    color: var(--graycool1000);
                    background-color: var(--graycool0);
                    box-shadow: 0px 0px 16px var(--graycool0);
                    border-radius: 32px;
                    padding: 24px;
                }

                @media only screen and (min-width: 600px) {
                    .pricing-container {
                        width: 384px;
                        height: auto;
                    }
                }

                .plan-container {
                    margin-bottom: 24px;
                    font-size: 24px;
                }

                .price-container {
                    font-family: var(--font-inter-tight);
                    font-size: 40px;
                    font-weight: 800;
                    text-shadow: 2px 2px 0px var(--graycool1000);
                    transition: color 0.2s, box-shadow 0.2s, transform 0.2s;
                    animation: text-pulse 2.5s ease-in-out infinite;
                }

                @keyframes text-pulse {
                    0%, 100% {
                        color: var(--sunset600);
                    }
                    50% {
                        color: var(--cerulean600);
                    }
                }

                .description-container {
                    margin-top: 16px;
                }

                .button-container {
                    margin-top: 32px;
                    margin-left: 16px;
                    margin-right: 16px;
                    display: flex;
                    justify-content: center;
                }

                .button-container a {
                    color: var(--graycool0);
                    text-decoration: none;
                    font-size: 16px;
                    text-shadow: 2px 2px 0px var(--graycool1000);
                    font-family: var(--font-inter-tight);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    margin-left: auto;
                    margin-right: auto;
                    font-weight: 600;
                    padding-top: 8px;
                    padding-bottom: 8px;
                    padding-left: 8px;
                    padding-right: 8px;
                    border-radius: 8px;
                    transition: background-color 0.2s, box-shadow 0.2s, transform 0.2s;

                    /* Pulsing glow animation */
                    animation: glow-pulse 2.5s ease-in-out infinite;
                }

                .button-container a:hover {
                    transform: scale(1.1);
                }

                .button-container a:active {
                    transform: scale(1.2);
                }

                @keyframes glow-pulse {
                    0%, 100% {
                        box-shadow: 0px 0px 16px var(--sunset600);
                        background-color: var(--sunset600);
                    }
                    50% {
                        box-shadow: 0px 0px 16px var(--cerulean600);
                        background-color: var(--cerulean600);
                    }
                }
                
            </style>

            <div class="pricing-container">
                <div class="plan-container">
                    <div>
                        <slot name="plan"></slot>
                    </div>
                </div>
                <div class="price-container">
                    <slot name="price"></slot>
                </div>
                <div class="description-container">
                    <slot name="description"></slot>
                </div>
                <div class="button-container">
                    <a href="${href}" target="${target}" rel="noopener noreferrer">
                        ${label}<slot name="button"></slot>
                    </a>
                </div>
            </div>
        `;
    }
}

customElements.define('component-pricing-card', ComponentPricingCard);