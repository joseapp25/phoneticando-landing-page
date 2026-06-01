class ComponentGlobalLogo extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML=`

            <link rel="stylesheet" href="style.css">

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

            <a href="index.html" class="global-menu-logo-anchor">

                <svg class="global-menu-logo" viewBox="0 0 1024 1024">
                    <path d="M899.471 169.143V32L124.531 169.143H899.471Z"/>
                    <path d="M757.135 717.714L899.471 224H124.531V498.286H266.867L124.531 992H899.471V717.714H757.135Z"/>
                </svg>

            </a>
        `
    }
}

customElements.define('component-global-logo', ComponentGlobalLogo);

