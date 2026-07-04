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

                .pricing-cotainer {
                    text-align: center;
                    color: var(--graycool0);
                    border-radius: 8px;
                    background-color: var(--graycool800);
                    padding-top: 24px;
                    padding-bottom: 24px;
                    box-shadow: 4px 4px 0px var(--graycool400);
                }

                .plan-container {
                    margin-bottom: 16px;
                    font-size: 24px;
                }

                .price-container {
                    font-family: var(--font-inter-tight);
                    font-size: 40px;
                    font-weight: 800;
                    text-shadow: 2px 2px 0px var(--graycool1000);
                }

                .description-container {

                }

                .button-container {
                    margin-top: 16px
                }

                .button-container a {
                    color: var(--graycool0);
                    text-decoration: none;
                    font-size: 32px;
                    font-weight: 600;
                    text-shadow: 2px 2px 0px var(--graycool1000);
                }
                
            </style>

            <div class="pricing-cotainer">
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