class ComponentInspirationalCard extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="styles/style.css">

            <style>

            .inspirational-container {
                background-color: var(--graycool0);
                color: var(--cerulean600);
                padding: 16px;
                margin-bottom: 16px;
                margin-top: 16px;
                text-align: center;
                font-size: 16px;
                font-weight: 600;
                font-style: italic;
            }

            </style>

            <div class="inspirational-container">
                <slot></slot>
            </div>

        `
    }
}

customElements.define('component-inspirational-card', ComponentInspirationalCard);