class ComponentSectionTitle extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="styles/style.css">

            <style>

                .title-container {
                    margin-top: 16px;
                    margin-bottom: 16px;
                }

                .simple-text {
                    max-width: 600px;
                    font-size: 32px;
                    line-height: 40px;
                    font-weight: 300;
                    font-family: var(--font-inter-tight);
                    text-align: center;
                    text-shadow: 1px 1px 0px var(--graycool1000);
                }

                .highlight-text {
                    max-width: 600px;
                    font-size: 64px;
                    line-height: 72px;
                    font-weight: 600;
                    font-family: var(--font-inter-tight);
                    text-align: center;
                    text-shadow: 2px 2px 0px var(--graycool1000);
                }

            </style>

                <h1>
                    <div class="title-container">
                        <div class="simple-text">
                            <slot name="simple"></slot>
                        </div>
                        <div class="highlight-text">
                            <slot name="highlight"></slot>
                        </div>
                    <div>
                </h1>

        `
    }
}

customElements.define('component-section-title', ComponentSectionTitle);