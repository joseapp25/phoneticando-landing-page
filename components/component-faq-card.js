class ComponentFaqCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="styles/style.css">

            <style>
                .faq-item {
                    margin-top: 16px;
                    margin-bottom: 16px;
                    padding: 8px;
                    border-radius: 8px;
                    box-shadow: 0px 0px 8px var(--graycool200);
                    background-color: white;
                    color: var(--graycool800);
                }

                .faq-q {
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                }

                .faq-q:hover {
                    color: var(--cerulean600);
                    fill: var(--cerulean600);
                    transition-duration: 0.2s;
                }

                .faq-body {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.6s ease;
                }

                .faq-body-inner {
                    display: flex;
                    margin-top: 8px;
                    font-weight: 300;
                    font-size: 16px;
                    line-height: 24px;
                    padding-left: 8px;
                    padding-right: 8px;
                }

                .faq-item.open .faq-body {
                    max-height: 400px;
                }

                .faq-item.open .faq-icon {
                    transform: rotate(-270deg);
                }

                .faq-icon svg {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 24px;
                    height: 24px;
                    transform: rotate(270deg);
                    fill: var(--cerulean600);
                }
            </style>

            <div class="faq-item">

                <div class="faq-q" role="button" aria-expanded="false">
                    <div class="faq-icon">
                        <svg viewBox="0 0 1024 1024">
                            <path d="M225.833 383.997L286.166 323.664L512 549.497L737.833 323.664L798.166 383.997L512 670.164L225.833 383.997Z"/>
                        </svg>
                    </div>
                    <slot name="question"></slot>
                </div>

                <div class="faq-body">
                    <slot class="faq-body-inner" name="answer"></slot>
                </div>

            </div>

        `;
    }

    connectedCallback() {
        const item = this.shadowRoot.querySelector('.faq-item');
        const trigger = this.shadowRoot.querySelector('.faq-q');

        trigger.addEventListener('click', () => {
            const isOpen = item.classList.toggle('open');
            trigger.setAttribute('aria-expanded', isOpen);
        });
    }
}

customElements.define('component-faq-card', ComponentFaqCard);