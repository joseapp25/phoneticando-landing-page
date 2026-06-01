class ComponentGlobalMenu extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="styles/style.css">

            <style>

                .global-menu {
                    position: fixed;
                    display: flex;
                    width: 100%;
                    height: 48px;
                    top: 0;
                    background-color: white;
                    box-shadow: 0px 0px 4px var(--graycool200);
                    z-index: 1;
                }

                .global-menu-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 4px;
                    width: 100vw;
                    padding-left: 24px;
                    padding-right: 24px;
                    margin-left: auto;
                    margin-right: auto;
                }

                @media only screen and (min-width: 600px) {
                    .global-menu-container {
                        max-width: 552px;
                    }
                }
                    
            </style>

            <style>

                .global-menu-logo {
                    width: 24px;
                    height: 24px;
                }

                .global-menu-logo-anchor {
                    display: flex;
                    gap: 4px;
                    fill: var(--cerulean600);
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    transition-duration: 0.2s;
                    cursor: pointer;
                }

                .global-menu-logo-anchor:hover {
                    transition-duration: 0.2s;
                    fill: var(--sunset600);
                }
                    
            </style>

            <style>
            
                .phoneticando-text {
                    font-size: 16px;
                    font-weight: 400;
                    color: var(--cerulean700);
                }

            </style>

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
                    height: -webkit-fill-available;
                    width: 128px;
                    background-color: white;
                    box-shadow: 0px 0px 8px var(--graycool200);
                    padding: 16px;
                    position: fixed;
                    top: 0;
                    right: 0;
                }

                @media only screen and (min-width: 600px) {
                    .hamburger-menu-nav {
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

            <div class="global-menu">

                <div class="global-menu-container">

                    <a href="index.html" class="global-menu-logo-anchor">
                        <svg class="global-menu-logo" viewBox="0 0 1024 1024">
                            <path d="M899.471 169.143V32L124.531 169.143H899.471Z"/>
                            <path d="M757.135 717.714L899.471 224H124.531V498.286H266.867L124.531 992H899.471V717.714H757.135Z"/>
                        </svg>
                    </a>

                    <div>
                        <span class="phoneticando-text">@phoneticando</span>
                    </div>

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

                </div>

            </div>
        `
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

customElements.define('component-global-menu', ComponentGlobalMenu);

