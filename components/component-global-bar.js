class ComponentGlobalBar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML=`

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

            <div class="global-menu">

                <div class="global-menu-container">

                    <slot></slot>

                </div>

            </div>
        `
    }
}

customElements.define('component-global-bar', ComponentGlobalBar);

