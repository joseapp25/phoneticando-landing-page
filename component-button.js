class ComponentButton extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML=`

            <link rel="stylesheet" href="style.css">

            <style>

                .button-anchor {
                    margin-top: 32px;
                    font-size: 24px;
                    display: block;
                    text-align: center;
                    margin-left: auto;
                    margin-right: auto;
                    text-decoration: none;
                    font-weight: bold;
                    color: var(--graycool0);
                    background-color: var(--cerulean600);
                    padding-top: 24px;
                    padding-bottom: 24px;
                    border-radius: 8px;
                    transition-duration: 0.2s;
                }

                .button-anchor:hover {
                    background-color: var(--cerulean800);
                    box-shadow: 0px 0px 8px var(--cerulean800);
                    transition-duration: 0.2s;
                }

                @media only screen and (min-width: 600px) {
                    .button-anchor {
                        max-width: 360px;
                    }
                }
            
            </style>

            <a href="https://wa.me/qr/U2BU7A5QAB3HG1" target="_blank" class="button-anchor">Conversar com Zé!</a>

        `
    }
}

customElements.define('component-button', ComponentButton);