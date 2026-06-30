class ComponentPageTitle extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="styles/style.css">

            <style>

                .page-title-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }

                .page-title {
                    font-family: var(--font-inter-tight);
                    font-weight: 600;
                    font-size: 32px;
                    line-height: 40px;
                    text-align: center;
                    text-shadow: 2px 2px 0px var(--graycool1000);
                }

                .page-subtitle {
                    font-family: var(--font-inter-tight);
                    font-weight: 200;
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: 8px;
                    text-transform: uppercase;
                    text-align: center;
                    text-shadow: 1px 1px 0px var(--graycool1000);
                }

                .logo-style {
                    fill: var(--graycool0);
                    width: 40px;
                    height: 40px;
                    transition: background-color 0.2s, box-shadow 0.2s, transform 0.2s;
                    animation: glow-pulse 2.5s ease-in-out infinite;
                }

                @keyframes glow-pulse {
                    0%, 100% {
                        fill: var(--sunset600);
                    }
                    50% {
                        fill: var(--cerulean600);
                    }
                }

            </style>

            <div class="page-title-container">

                <svg class="logo-style" viewBox="0 0 1024 1024">
                    <path d="M899.471 169.143V32L124.531 169.143H899.471Z"/>
                    <path d="M757.135 717.714L899.471 224H124.531V498.286H266.867L124.531 992H899.471V717.714H757.135Z"/>
                </svg>

                <h1>
                
                    <div class="page-title">
                        phoneticando
                    </div>

                    <div class="page-subtitle">
                        <slot></slot>
                    </div>
            
                </h1>

            </div>

        `
    }
}

customElements.define('component-page-title', ComponentPageTitle);