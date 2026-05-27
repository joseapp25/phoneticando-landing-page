class ComponentAccordion extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        const id = this.getAttribute('id')
        const header = this.getAttribute('header')
        const body = this.getAttribute('body')
        this.shadowRoot.innerHTML=`

            <link rel="stylesheet" href="style.css">

            <style>
            
            </style>

            <div class="faq-item" id="${id}">
                <div class="faq-q" onclick="toggleAccordion('${id}')" role="button" aria-expanded="false">
                    <div class="faq-icon">
                        <svg viewBox="0 0 1024 1024">
                            <path d="M225.833 383.997L286.166 323.664L512 549.497L737.833 323.664L798.166 383.997L512 670.164L225.833 383.997Z"/>
                        </svg>
                    </div>
                    <span>${header}</span>
                </div>
                <div class="faq-body">
                    <div class="faq-body-inner">${body}</div>
                </div>
            </div>

            <script>

                function toggleAccordion(id) {
                    console.log(id)
                    const item = document.getElementById(id);
                    const btn = item.querySelector('.faq-q');
                    const isOpen = item.classList.contains('open');
                    item.classList.toggle('open', !isOpen);
                    btn.setAttribute('aria-expanded', String(!isOpen));
                }

            </script>

        `
    }
}

customElements.define('component-accordion', ComponentAccordion);