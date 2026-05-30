class ComponentGlobalMenu extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML=`

            <link rel="stylesheet" href="style.css">

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

                .hamburger-menu {
                    width: 24px;
                    height: 24px;
                }

                .hamburger-menu-container {
                    display: flex;
                    gap: 4px;
                    fill: var(--cerulean600);
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    transition-duration: 0.2s;
                    cursor: pointer;
                }

                .hamburger-menu-container:hover {
                    transition-duration: 0.2s;
                    fill: var(--sunset600);
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

                            @phoneticando
                        
                        </div>

                        <div class="hamburger-menu-container">

                            <svg class="hamburger-menu" viewBox="0 0 1024 1024">
                                <path d="M853.334 341.333H170.667V256H853.334V341.333Z" />
                                <path d="M853.334 554.667H170.667V469.333H853.334V554.667Z" />
                                <path d="M170.667 768H853.334V682.667H170.667V768Z" />
                            </svg>

                        </div>

                </div>

            </div>



 

        `
    }
}

customElements.define('component-global-menu', ComponentGlobalMenu);