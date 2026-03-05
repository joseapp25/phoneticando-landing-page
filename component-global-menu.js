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
                    align-items: center;
                    width: 100%;
                    height: 40px;
                    top: 0;
                    background-color: white;
                    box-shadow: 0px 0px 4px var(--graycool200);
                    z-index: 1;
                }

                .global-menu-container {
                    display: flex;
                    width: 90vw;
                    margin-left: auto;
                    margin-right: auto;
                }

                @media only screen and (min-width: 600px) {
                    .global-menu-container {
                        max-width: 600px;
                    }
                }

                .global-menu-logo {
                    width: 24px;
                    height: 24px;
                }

                .global-menu-logo-anchor {
                    display: flex;
                    color: var(--cerulean600);
                    fill: var(--cerulean600);
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    transition-duration: 0.2s;
                }

                .global-menu-logo-anchor:hover {
                    transition-duration: 0.2s;
                    color: var(--cerulean400);
                    fill: var(--cerulean400);
                }

                .margin-r {
                    margin-right: auto;
                }

                .margin-l {
                    margin-left: auto;
                }
                    
            </style>

            <div class="global-menu">

                <div class="global-menu-container">

                        <a href="index.html" class="global-menu-logo-anchor margin-r">

                            <svg class="global-menu-logo" viewBox="0 0 1024 1024">
                                <path d="M899.471 169.143V32L124.531 169.143H899.471Z"/>
                                <path d="M757.135 717.714L899.471 224H124.531V498.286H266.867L124.531 992H899.471V717.714H757.135Z"/>
                            </svg>

                        </a>

                        <a href="#" class="global-menu-logo-anchor margin-l">

                            @phoneticando

                        </a>

                </div>

            </div>



 

        `
    }
}

customElements.define('component-global-menu', ComponentGlobalMenu);