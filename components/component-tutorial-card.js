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
                    transition-duration: 0.2s;
                }

                .tutorial-q:hover {
                    color: var(--sunset600);
                    transition-duration: 0.2s;
                }

                .tutorial-q:active {
                    color: var(--sunset400);
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
                    max-height: 400px;
                }
            </style>

            <div class="tutorial-item-container">
                <div class="tutorial-item">
                    <div class="tutorial-q" role="button" aria-expanded="false">
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