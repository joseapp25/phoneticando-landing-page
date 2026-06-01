class ComponentGlobalHamburger extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="styles/style.css">

            <style>

                .hamburger-menu-icon {
                    width: 24px;
                    height: 24px;
                }

                .hamburger-menu-button {
                    background: none;
                    border: none;
                    padding: 0;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition-duration: 0.2s;
                    fill: var(--cerulean600);
                }

                .hamburger-menu-button:hover {
                    transition-duration: 0.2s;
                    cursor: pointer;
                    fill: var(--sunset600);
                }

                .hamburger-menu-nav {
                    background-color: var(--graycool100);
                    box-shadow: 0px 0px 8px var(--graycool600);
                    border-radius: 8px;
                    padding: 16px;
                    position: fixed;
                    right: 16px;
                    top: 64px;
                }

                @media only screen and (min-width: 600px) {
                    .hamburger-menu-nav {
                        right: 680px;
                    }
                }

                .hamburger-menu-nav a {
                    text-decoration: none;
                    color: var(--cerulean600);
                    transition-duration: 0.2s;
                    padding: 4px 8px 4px 8px;
                    border-radius: 4px;
                    font-weight: 500;
                    
                }

                .hamburger-menu-nav a:hover {
                    background-color: var(--cerulean600);
                    box-shadow: 0px 0px 8px var(--cerulean600);
                    color: var(--graycool0);
                    transition-duration: 0.2s;
                }

                .hamburger-menu-nav a:active {
                    color: var(--sunset300);
                }

                .hamburger-menu-nav-container {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

            </style>

            <button class="hamburger-menu-button" aria-label="Open menu" aria-expanded="false">

                <svg class="hamburger-menu-icon" viewBox="0 0 1024 1024">
                    <path d="M853.334 341.333H170.667V256H853.334V341.333Z" />
                    <path d="M853.334 554.667H170.667V469.333H853.334V554.667Z" />
                    <path d="M170.667 768H853.334V682.667H170.667V768Z" />
                </svg>

            </button>

            <nav class="hamburger-menu-nav" hidden>

                <div class="hamburger-menu-nav-container">
                    <a href="index.html" tabindex="_self">Início</a>
                    <a href="trainer.html" tabindex="_self">Trainer</a>
                    <a href="aulas.html" tabindex="_self">Aulas</a>
                    <a href="sobre.html" tabindex="_self">Sobre</a>
                </div>

            </nav>

        `;
    }

    connectedCallback() {
        this._button = this.shadowRoot.querySelector('.hamburger-menu-button');
        this._nav = this.shadowRoot.querySelector('.hamburger-menu-nav');

        this._button.addEventListener('click', () => this.handleToggle());
    }

    disconnectedCallback() {
        this._button.removeEventListener('click', () => this.handleToggle());
    }

    handleToggle() {
        const isOpen = this.getAttribute('open') !== null;

        if (isOpen) {
            this.removeAttribute('open');
            this._nav.setAttribute('hidden', '');
            this._button.setAttribute('aria-expanded', 'false');
            this._button.setAttribute('aria-label', 'Open menu');
        } else {
            this.setAttribute('open', '');
            this._nav.removeAttribute('hidden');
            this._button.setAttribute('aria-expanded', 'true');
            this._button.setAttribute('aria-label', 'Close menu');
        }

        this.dispatchEvent(new CustomEvent('menu-toggle', {
            detail: { open: !isOpen },
            bubbles: true,
            composed: true
        }));
    }
}

customElements.define('component-global-hamburger', ComponentGlobalHamburger);