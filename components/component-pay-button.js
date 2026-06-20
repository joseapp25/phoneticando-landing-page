class ComponentPayButton extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="styles/style.css">

            <style>

                .button-anchor {
                    max-width: 320px;
                    margin-top: 32px;
                    font-size: 24px;
                    font-family: var(--font-inter-tight);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    margin-left: auto;
                    margin-right: auto;
                    text-decoration: none;
                    font-weight: 600;
                    color: var(--graycool0);
                    padding-top: 16px;
                    padding-bottom: 16px;
                    border-radius: 8px;
                    transition: background-color 0.2s, box-shadow 0.2s, transform 0.2s;

                    /* Pulsing glow animation */
                    animation: glow-pulse 2.5s ease-in-out infinite;
                }

                @keyframes glow-pulse {
                    0%, 100% {
                        box-shadow: 0px 0px 16px var(--sunset600);
                        background-color: var(--sunset600);
                    }
                    50% {
                        box-shadow: 0px 0px 16px var(--cerulean600);
                        background-color: var(--cerulean600);
                    }
                }

                .button-anchor:hover {
                    background: var(--cerulean1000);
                    transition: background-color 0.2s, box-shadow 0.2s, transform 0.2s;
                    transform: scale(1.1);
                }

                .button-anchor:active {
                    transition: background-color 0.2s, box-shadow 0.2s, transform 0.2s;
                    transform: scale(1.2);
                }

                @media only screen and (min-width: 600px) {
                    .button-anchor {
                        max-width: 384px;
                    }
                }

                .button-icon {
                    width: 32px;
                    height: 32px;
                    display: flex;
                    justify-content: center;
                }
            
            </style>

            <a href="#" /*target="_blank"*/ class="button-anchor">

                <slot></slot>

            </a>

        `
    }
}

customElements.define('component-pay-button', ComponentPayButton);