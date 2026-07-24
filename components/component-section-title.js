class ComponentSectionTitle extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="styles/style.css">

            <style>

                .title-container {
                    margin-top: 8px;
                    margin-bottom: 8px;
                }

                .simple-text {
                    max-width: 600px;
                    display: flex;
                    font-size: 24px;
                    font-weight: 300;
                    font-family: var(--font-inter-tight);
                    text-shadow: 1px 1px 0px var(--graycool1000);
                }

                .highlight-text {
                    max-width: 600px;
                    display: flex;
                    font-size: 56px;
                    font-weight: 600;
                    font-family: var(--font-inter-tight);
                    text-shadow: 2px 2px 0px var(--graycool1000);
                }

                @media only screen and (min-width: 600px) {
                    .highlight-text {
                        font-size: 80px;
                    }
                    .simple-text {
                        font-size: 40px;
                    }
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