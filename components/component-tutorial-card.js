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
                }

                .tutorial-q {
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 4px;
                    transition-duration: 0.2s;
                    fill: var(--sunset600);
                }

                .tutorial-q:hover {
                    color: var(--cerulean600);
                    transition-duration: 0.2s;
                    fill: var(--cerulean600);
                }

                .tutorial-q:active {
                    color: var(--cerulean400);
                    transition-duration: 0.2s;
                    fill: var(--cerulean400);
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
                    max-height: 400px;
                }

                .tutorial-icon-svg {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 24px;
                    height: 24px;
                }
            </style>

            <div class="tutorial-item-container">

                <div class="tutorial-item">

                    <div class="tutorial-q" role="button" aria-expanded="false">
                        <div class="tutorial-icon">
                            <svg class="tutorial-icon-svg" viewBox="0 0 1024 1024">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M512 85.3359C747.641 85.3359 938.666 276.361 938.666 512.003C938.666 747.644 747.641 938.669 512 938.669C276.358 938.669 85.333 747.644 85.333 512.003C85.333 276.361 276.358 85.3359 512 85.3359ZM426.666 426.669V512.003H469.333V682.669H426.666V768.003H597.333V682.669H554.666V426.669H426.666ZM469.333 256.003V341.336H554.666V256.003H469.333Z" />
                            </svg>
                        </div>
                        <slot name="tutorial-title"></slot>
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