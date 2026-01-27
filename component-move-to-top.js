class ComponentMovetoTop extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML=`

            <link rel="stylesheet" href="style.css">

            <a href="#">
                <svg class="move-to-top" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M20 4H4V2H20V4Z"/>
                    <path d="M12 5.58579L18.7071 12.2929L17.2929 13.7071L13 9.41421L13 22H11L11 9.41421L6.70711 13.7071L5.29289 12.2929L12 5.58579Z"/>
                </svg>
            </a>
            
        `
    }
}

customElements.define('component-move-to-top', ComponentMovetoTop);