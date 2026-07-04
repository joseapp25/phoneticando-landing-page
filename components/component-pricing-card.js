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

                }

                .plan-container {

                }

                .price-container {

                }

                .description-container {

                }

                .button-container {
                    
                }
                
            </style>

            <div class="pricing-cotainer">
                <div class="plan-container">
                    <slot name="plan"></slot>
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