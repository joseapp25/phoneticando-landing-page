class ComponentQuoteCard extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="styles/style.css">

            <style>

            .quotation-container {
                background-color: var(--graycool0);
                color: var(--graycool1000);
                border-left: 8px solid var(--sunset600);
                padding: 16px;
                margin-bottom: 24px;
                margin-top: 24px;
                border-radius: 4px;
            }

            .quote-container {
                margin-bottom: 8px;
            }

            .quote-style {
                font-weight: 800;
                font-size: 1.2rem;
            }

            .author-container {
                margin-top: 8px;
            }

            .author-style {
                color: var(--cerulean600);
                font-style: italic;
                font-weight: 600;
                font-family: var(--font-noto);
            }


            </style>

            <div class="quotation-container">
                <div class="quote-container">
                    <p>
                        <q class="quote-style">
                            <slot name="quote"></slot>
                        </q>
                    </p>
                </div>
                <div class="author-container">
                    <p class="author-style">
                        <slot name="author"></slot>
                    </p>
                </div>
            </div>

        `
    }
}

customElements.define('component-quote-card', ComponentQuoteCard);