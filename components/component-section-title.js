class ComponentSectionTitle extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="styles/style.css">

            <style>

                .title-container {
                    text-align: left;
                    margin-top: 16px;
                    margin-bottom: 16px;
                }

                .simple-text {
                    max-width: 600px;
                    font-size: 24px;
                    line-height: 32px;
                    font-weight: 400;
                    font-family: var(--font-inter-tight);
                    scroll-margin-top: 80px;
                    margin-left: auto;
                    margin-right: auto;
                    text-align: center;
                }

                .highlight-text {
                    max-width: 600px;
                    font-size: 40px;
                    line-height: 48px;
                    font-weight: 600;
                    font-family: var(--font-inter-tight);
                    scroll-margin-top: 80px;
                    margin-left: auto;
                    margin-right: auto;
                    text-align: center;
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