class ComponentFooter extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML=`

            <link rel="stylesheet" href="style.css">

            <div class="footer-style">

                <div class="contacts-container">

                    <a href="https://teacherzeantonio.com.br" target="_blank">

                        <img class="contacts-link" src="images/icons/website-icon.svg" alt="Website Logo">

                    </a>

                    <a href="https://wa.me/qr/U2BU7A5QAB3HG1" target="_blank">

                        <img class="contacts-link" src="images/icons/whatsapp-icon.svg" alt="Whatsapp Logo">

                    </a>

                    <a href="https://www.youtube.com/@phoneticando" target="_blank">

                        <img class="contacts-link" src="images/icons/youtube-icon.svg" alt="YouTube Logo">

                    </a>

                    <a href="https://www.instagram.com/phoneticando" target="_blank">

                        <img class="contacts-link" src="images/icons/instagram-icon.svg" alt="Instagram Logo">

                    </a>

                    <a href="https://www.tiktok.com/@phoneticando" target="_blank">

                        <img class="contacts-link" src="images/icons/tiktok-icon.svg" alt="TikTok Logo">
                        
                    </a>

                </div>

                <div class="footer-copyright-container">

                    <div class="footer-logo-container">

                        <img src="images/footer-logo.svg" alt="footer logo">

                    </div>

                    <div class="footer-text-container">

                        <p>Zé Antonio — Phoneticando</p>
                        <p>&#174;2026 | All Rights Reserved</p>

                    </div>

                </div>

            </div>

        `
    }
}

customElements.define('component-footer', ComponentFooter);