class ComponentBenefitsCard extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="styles/style.css">

            <style>

                .benefits-cards {
                    padding: 16px;
                    margin-top: 24px;
                    margin-bottom: 24px;
                    border-radius: 8px;
                    box-shadow: 0px 0px 4px var(--graycool800);
                }

                .benefits-img-title-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 8px;
                }

                .benefits-cards-img {
                    display: flex;
                }

                .benefits-title {
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                }

                .benefits-text {
                    font-size: 16px;
                    font-weight: 200;
                    line-height: 24px;
                    text-align: justify;
                    hyphens: auto;
                }
            
            </style>

            <div class="benefits-cards">
                <div class="benefits-img-title-container">
                    <div class="benefits-cards-img">
                        <slot name="img"></slot>
                    </div>
                    <div class="benefits-title">
                        <slot name="title"></slot>
                    </div>
                </div>
                <div class="benefits-text">
                    <slot name="text"></slot>
                <div>
            </div>

        `
    }
}

customElements.define('component-benefits-card', ComponentBenefitsCard);