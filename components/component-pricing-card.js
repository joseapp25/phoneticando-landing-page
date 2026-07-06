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
                    border-radius: 32px;
                    padding: 24px;
                }

                @media only screen and (min-width: 600px) {
                    .pricing-container {
                        width: 320px;
                        height: auto;
                    }
                }

                .plan-container {
                    margin-bottom: 40px;
                    font-size: 24px;
                }

                .price-container {
                    font-family: var(--font-inter-tight);
                    font-size: 40px;
                    font-weight: 800;
                }

                .description-container {
                    margin-top: 16px;
                }

                .button-container {
                    margin-top: 40px;
                    margin-left: 16px;
                    margin-right: 16px;
                    display: flex;
                    justify-content: center;
                }

                .button-container a {
                    color: var(--graycool0);
                    background-color: var(--sunset600);
                    text-decoration: none;
                    font-size: 16px;
                    font-family: var(--font-inter-tight);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    margin-left: auto;
                    margin-right: auto;
                    font-weight: 600;
                    padding-top: 16px;
                    padding-bottom: 16px;
                    padding-left: 16px;
                    padding-right: 16px;
                    border-radius: 8px;
                    transition-duration: 0.2s;
                }

                .button-container a:hover {
                    transform: scale(1.1);
                    transition-duration: 0.2s;
                }

                .button-container a:active {
                    transform: scale(1.2);
                    transition-duration: 0.2s;
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