class ComponentPageTitle extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="styles/style.css">

            <style>

                .page-title {
                    color: var(--sunset500);
                    font-size: 32px;
                    line-height: 40px;
                    font-weight: 600;
                    letter-spacing: -2px;
                    text-shadow: 2px 2px 0px var(--graycool1000);
                }

            </style>

            <h1 class="page-title"><slot></slot></h1>

        `
    }
}

customElements.define('component-page-title', ComponentPageTitle);