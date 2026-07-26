class ComponentTutorialCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="styles/style.css">

            <style>
                .tutorial-item-container {
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                    padding-left: 24px;
                    padding-right: 24px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .tutorial-item {
                    margin-top: 16px;
                    margin-bottom: 16px;
                    /*box-shadow: 0px 0px 4px var(--graycool400);*/
                    border: 2px solid var(--graycool500);
                    border-radius: 8px;
                    padding: 16px;
                }

                .tutorial-q {
                    font-weight: 600;
                    text-transform: uppercase;
                    font-family: var(--font-inter-tight);
                    font-size: 16px;
                    line-height: 24px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 4px;
                    transition-duration: 0.2s;
                    animation: glow-pulse 2s ease-in-out infinite;
                }

                .tutorial-q:hover {
                    transform: scale(1.1);
                    transition-duration: 0.2s;
                }

                .tutorial-body {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.6s ease;
                }

                .tutorial-body-inner {
                    display: flex;
                    margin-top: 8px;
                    font-weight: 300;
                    font-size: 16px;
                    line-height: 24px;
                    padding-left: 8px;
                    padding-right: 8px;
                }

                .tutorial-item.open .tutorial-body {
                    max-height: 1920px;
                }

                .tutorial-icon-svg {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 16px;
                    height: 16px;
                }

                .tutorial-item.open .chevron-icon {
                    transform: rotate(-270deg);
                }

                .chevron-icon svg {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 24px;
                    height: 24px;
                    transform: rotate(270deg);
                }

                @keyframes glow-pulse {
                    0%, 100% {
                        color: var(--sunset600);
                        fill: var(--sunset600);
                    }
                    50% {
                        color: var(--cerulean600);
                        fill: var(--cerulean600);
                    }
                }
            </style>

            <div class="tutorial-item-container">

                <div class="tutorial-item">

                    <div class="tutorial-q" role="button" aria-expanded="false">
                        <div class="chevron-icon">
                            <svg viewBox="0 0 1024 1024">
                                <path d="M225.833 383.997L286.166 323.664L512 549.497L737.833 323.664L798.166 383.997L512 670.164L225.833 383.997Z"/>
                            </svg>
                        </div>
                        <slot name="tutorial-title"></slot>
                        <div class="tutorial-icon">
                            <svg class="tutorial-icon-svg" viewBox="0 0 1024 1024">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M512 85.3359C747.641 85.3359 938.666 276.361 938.666 512.003C938.666 747.644 747.641 938.669 512 938.669C276.358 938.669 85.333 747.644 85.333 512.003C85.333 276.361 276.358 85.3359 512 85.3359ZM426.666 426.669V512.003H469.333V682.669H426.666V768.003H597.333V682.669H554.666V426.669H426.666ZM469.333 256.003V341.336H554.666V256.003H469.333Z" />
                            </svg>
                        </div>
                    </div>

                    <div class="tutorial-body">
                        <slot class="tutorial-body-inner" name="tutorial-content"></slot>
                    </div>

                </div>

            </div>

        `;
    }

    connectedCallback() {
        const item = this.shadowRoot.querySelector('.tutorial-item');
        const trigger = this.shadowRoot.querySelector('.tutorial-q');

        trigger.addEventListener('click', () => {
            const isOpen = item.classList.toggle('open');
            trigger.setAttribute('aria-expanded', isOpen);
        });
    }
}

customElements.define('component-tutorial-card', ComponentTutorialCard);