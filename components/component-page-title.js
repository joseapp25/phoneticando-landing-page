class ComponentPageTitle extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="styles/style.css">

            <style>

                .page-title {
                    font-family: var(--font-inter-tight);
                    font-weight: 600;
                    font-size: 32px;
                    line-height: 40px;
                    color: var(--sunset600);
                    text-shadow: 2px 2px 0px var(--graycool1000);
                    text-transform: uppercase;
                }

            </style>

            <h1 class="page-title"><slot></slot></h1>

        `
    }
}

customElements.define('component-page-title', ComponentPageTitle);