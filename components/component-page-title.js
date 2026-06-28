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
                    color: var(--graycool0);
                    text-shadow: 2px 2px 0px var(--graycool1000);
                    
                }

                .page-subtitle {
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: 8px;
                    text-transform: uppercase;
                    font-weight: 200;
                    color: var(--graycool0);
                }

            </style>

            <h1>
            
                <div class="page-title">
                    phoneticando
                </div>
                <div class="page-subtitle">
                    <slot></slot>
                </div>
           
            </h1>

        `
    }
}

customElements.define('component-page-title', ComponentPageTitle);