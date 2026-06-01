class ComponentBenefitsCard extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="styles/style.css">

            <style>

                .benefits-cards {
                    background-color: var(--graycool0);
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    padding: 16px;
                    margin-top: 16px;
                    margin-bottom: 16px;
                    border-radius: 8px;
                    box-shadow: 0px 0px 8px var(--cerulean300);
                }

                .benefits-cards-img {
                    display: flex;
                }

                .benefits-paragraph {
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                }
            
            </style>

            <div class="benefits-cards">
                <div class="benefits-cards-img">
                    <slot name="img"></slot>
                </div>
                <div class="benefits-paragraph">
                    <slot name="text"></slot>
                </div>
            </div>

        `
    }
}

customElements.define('component-benefits-card', ComponentBenefitsCard);