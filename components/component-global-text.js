class ComponentGlobalText extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML=`

            <link rel="stylesheet" href="styles/style.css">

            <style>
            
                .phoneticando-text {
                    font-size: 16px;
                    font-weight: 400;
                    color: var(--cerulean700);
                }

            </style>

            <div>

                <span class="phoneticando-text">@phoneticando</span>
            
            </div>
        `
    }
}

customElements.define('component-global-text', ComponentGlobalText);

