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
                    background-color: var(--graycool1000);
                    /*box-shadow: 0px 0px 4px var(--graycool800);*/
                    z-index: 4;
                }

                .global-menu-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 4px;
                    width: 100vw;
                    padding-left: 16px;
                    padding-right: 16px;
                    margin-left: auto;
                    margin-right: auto;
                }

                @media only screen and (min-width: 600px) {
                    .global-menu-container {
                        
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
                    fill: var(--graycool0);
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    transition-duration: 0.2s;
                    cursor: pointer;
                }

                .global-menu-logo-anchor:hover {
                    transition-duration: 0.2s;
                    fill: var(--sunset400);
                }

                .global-menu-logo-anchor:active {
                    fill: var(--sunset300);
                    transition-duration: 0.2s;
                }
                    
            </style>

            <style>
            
                .phoneticando-text {
                    font-size: 16px;
                    font-weight: 300;
                    color: var(--graycool0);
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
                    fill: var(--graycool0);
                }

                .hamburger-menu-button:hover {
                    transition-duration: 0.2s;
                    cursor: pointer;
                    fill: var(--sunset400);
                }

                .hamburger-menu-button:active {
                    fill: var(--sunset300);
                    transition-duration: 0.2s;
                }

                .hamburger-menu-nav {
                    overflow-y: auto;
                    transition: transform 0.3s ease;
                    height: 100vh;
                    width: 180px;
                    background-color: var(--graycool1000);
                    box-shadow: 0px 0px 8px var(--graycool800);
                    position: fixed;
                    top: 0;
                    right: 0;
                    transform: translateX(100%);
                }

                .hamburger-menu-nav::-webkit-scrollbar {
                    display: none;
                }

                .hamburger-menu-nav.open {
                    transform: translateX(0);
                }                

                @media only screen and (min-width: 600px) {
                    .hamburger-menu-nav {
                    }
                }

                .hamburger-menu-nav a {
                    text-decoration: none;
                    color: var(--graycool0);
                    transition-duration: 0.2s;
                    padding: 4px 8px 4px 8px;
                    font-weight: 500;
                    padding: 8px;
                    transition-duration: 0.2s;
                }

                .hamburger-menu-nav a:hover {
                    background-color: var(--cerulean600);
                    transition-duration: 0.2s;
                }

                .hamburger-menu-nav a:active {
                    background-color: var(--cerulean400);
                    transition-duration: 0.2s;
                }

                .hamburger-menu-nav-container {
                    display: flex;
                    flex-direction: column;
                    transition-duration: 0.2s;
                }

                .hamburger-menu-nav-container-title {
                    display: flex;
                    top: 0;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 16px;
                    height: 48px;
                    padding-left: 16px;
                    padding-right: 16px;
                    
                }

                .hamburger-menu-close-button {
                    display: flex;
                    background: none;
                    border: none;
                    cursor: pointer;
                    fill: var(--graycool0);
                    transition-duration: 0.2s;
                }

                .hamburger-menu-close-button:hover {
                    fill: var(--sunset400);
                    transition-duration: 0.2s;
                }

                .hamburger-menu-close-button:active {
                    fill: var(--sunset300);
                    transition-duration: 0.2s;
                }
                
                .hamburger-menu-close-button-icon {
                    width: 24px;
                    height: 24px;
                }

                .menu-title {
                    color: var(--sunset600);
                    font-weight: 600;
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
                        <span class="phoneticando-text">Phoneticando | <slot></slot></span>
                    </div>

                    <button class="hamburger-menu-button" aria-label="Open menu" aria-expanded="false">
                        <svg class="hamburger-menu-icon" viewBox="0 0 1024 1024">
                            <path d="M853.334 341.333H170.667V256H853.334V341.333Z" />
                            <path d="M853.334 554.667H170.667V469.333H853.334V554.667Z" />
                            <path d="M170.667 768H853.334V682.667H170.667V768Z" />
                        </svg>
                    </button>

                    <nav class="hamburger-menu-nav">
                    <div class="hamburger-menu-nav-container-title">
                        <div class="menu-title">Menu</div>
                        <button class="hamburger-menu-close-button" aria-label="Close menu">
                            <svg class="hamburger-menu-close-button-icon" viewBox="0 0 1024 1024">
                                <path d="M243.507 840.837L512.007 572.337L780.507 840.837L840.846 780.497L572.346 511.997L840.84 243.504L780.5 183.164L512.007 451.658L243.513 183.164L183.173 243.504L451.667 511.997L183.167 780.497L243.507 840.837Z" />
                            </svg>
                        </button>
                    </div>
                        <div class="hamburger-menu-nav-container">    
                            <a href="index.html" target="_self">Início</a>
                            <a href="trainer.html" target="_self">Trainer</a>
                            <a href="aulas.html" target="_self">Aulas</a>
                            <a href="sobre.html" target="_self">Sobre</a>
                        </div>

                    </nav>

                </div>

            </div>
        `
    }

connectedCallback() {
    this._button = this.shadowRoot.querySelector('.hamburger-menu-button');
    this._nav = this.shadowRoot.querySelector('.hamburger-menu-nav');
    this._closeBtn = this.shadowRoot.querySelector('.hamburger-menu-close-button');

    this._button.addEventListener('click', () => this.handleToggle());
    this._closeBtn.addEventListener('click', () => this.handleToggle());  // ← add this
}

disconnectedCallback() {
    this._button.removeEventListener('click', () => this.handleToggle());
    this._closeBtn.removeEventListener('click', () => this.handleToggle());
}

handleToggle() {
    const isOpen = this.getAttribute('open') !== null;

    if (isOpen) {
        this.removeAttribute('open');
        this._nav.classList.remove('open');          // ← use class instead of hidden
        this._button.setAttribute('aria-expanded', 'false');
        this._button.setAttribute('aria-label', 'Open menu');
    } else {
        this.setAttribute('open', '');
        this._nav.classList.add('open');             // ← use class instead of hidden
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

