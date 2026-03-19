class ComponentFooter extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML=`

            <link rel="stylesheet" href="style.css">

            <style>

                .website-anchor {
                    color: var(--sunset600);
                    text-decoration: none;
                    transition-duration: 0.2s;
                    font-weight: 900;
                    padding: 4px;
                }

                .website-anchor:hover {
                    color: var(--sunset300);
                    text-decoration: underline;
                    transition-duration: 0.2s;
                    border-radius: 4px;
                }

                .contacts-container {
                    gap: 4px;
                    display: flex;
                    justify-content: center;
                }

                .contacts-link {
                    height: 24px;
                    width: 24px;
                    border-radius: 4px;
                    padding: 4px;
                    cursor: pointer;
                    align-items: center;
                    transition-duration: 0.2s;
                    fill: var(--cerulean600);
                }

                .contacts-link:hover {
                    background-color: var(--cerulean600);
                    transition-duration: 0.2s;
                    box-shadow: 0px 0px 4px var(--cerulean800);
                    fill: var(--graycool50);
                }

                .footer-style {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    gap: 8px;
                    background-image: linear-gradient(to right, var(--graycool1000), var(--graycool900));
                    color: var(--graycool0);
                    font-weight: 300;
                    font-size: 16px;
                    padding-top: 32px;
                    padding-bottom: 32px;
                }

                .footer-copyright-container {
                    display: flex;
                    gap: 4px;
                    align-items: center;
                    justify-content: center;
                }

                .footer-logo {
                    display: flex;
                    justify-content: center;
                    height: 40px;
                    width: 40px;
                    fill: var(--cerulean100);
                }

            </style>
            <div class="footer-style">
                <a href="https://phoneticando.com.br" target="_blank" class="website-anchor">phoneticando.com.br</a>
                <div class="contacts-container">
                    <a href="https://www.youtube.com/@phoneticando" target="_blank">
                        <svg class="contacts-link" viewBox="0 0 1024 1024">
                            <g clip-path="url(#clip0_3507_1895)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M931.839 386.986C929.279 352.853 925.439 325.973 919.892 305.92C909.225 267.52 884.479 242.773 846.079 232.106C802.132 220.16 690.772 213.333 511.999 213.333L444.159 215.893C397.225 215.893 346.452 217.173 290.985 220.16C234.665 222.72 197.972 226.56 177.919 232.106C139.519 242.773 114.772 267.52 104.105 305.92C92.1587 349.866 85.332 418.56 85.332 512L87.892 547.84C87.892 573.44 89.172 602.88 92.1587 637.013C94.7187 671.146 98.5587 698.026 104.105 718.08C114.772 756.48 139.519 781.226 177.919 791.893C221.865 803.84 333.225 810.666 511.999 810.666L579.839 808.106C626.772 808.106 677.545 806.826 733.012 803.84C789.332 801.28 826.025 797.44 846.079 791.893C884.479 781.226 909.225 756.48 919.892 718.08C931.839 674.133 938.665 605.44 938.665 512L936.105 476.16C936.105 450.56 934.825 421.12 931.839 386.986ZM648.105 512L426.665 640V384L648.105 512Z"/>
                            </g>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/phoneticando" target="_blank">
                        <svg class="contacts-link" viewBox="0 0 1024 1024">
                            <path d="M773.711 250.287C763.709 240.285 750.144 234.666 735.999 234.666C721.854 234.666 708.288 240.285 698.286 250.287C688.284 260.289 682.665 273.855 682.665 288C682.665 302.145 688.284 315.71 698.286 325.712C708.288 335.714 721.854 341.333 735.999 341.333C750.144 341.333 763.709 335.714 773.711 325.712C783.713 315.71 789.332 302.145 789.332 288C789.332 273.855 783.713 260.289 773.711 250.287Z"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M662.848 361.15C622.84 321.142 568.578 298.666 511.999 298.666C455.419 298.666 401.157 321.142 361.149 361.15C321.141 401.158 298.665 455.42 298.665 512C298.665 568.579 321.141 622.841 361.149 662.849C401.157 702.857 455.419 725.333 511.999 725.333C568.578 725.333 622.84 702.857 662.848 662.849C702.856 622.841 725.332 568.579 725.332 512C725.332 455.42 702.856 401.158 662.848 361.15ZM421.489 421.49C445.494 397.485 478.051 384 511.999 384C545.946 384 578.504 397.485 602.508 421.49C626.513 445.495 639.999 478.052 639.999 512C639.999 545.947 626.513 578.505 602.508 602.509C578.504 626.514 545.946 640 511.999 640C478.051 640 445.494 626.514 421.489 602.509C397.484 578.505 383.999 545.947 383.999 512C383.999 478.052 397.484 445.495 421.489 421.49Z"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M691.199 85.333H332.799C267.166 85.333 204.222 111.405 157.813 157.814C111.404 204.223 85.332 267.167 85.332 332.8V691.2C85.332 827.733 196.265 938.666 332.799 938.666H691.199C756.831 938.666 819.775 912.594 866.184 866.185C912.593 819.776 938.665 756.832 938.665 691.2V332.8C938.665 196.266 827.732 85.333 691.199 85.333ZM215.654 215.655C244.459 186.849 283.528 170.666 324.265 170.666H699.732C784.639 170.666 853.332 239.36 853.332 324.266V699.733C853.332 740.47 837.149 779.539 808.344 808.345C779.538 837.15 740.469 853.333 699.732 853.333H324.265C239.359 853.333 170.665 784.64 170.665 699.733V324.266C170.665 283.529 186.848 244.46 215.654 215.655Z"/>
                        </svg>
                    </a>
                    <a href="https://www.tiktok.com/@phoneticando" target="_blank">
                        <svg class="contacts-link" viewBox="0 0 1024 1024">
                            <path d="M663.035 128C663.023 172.264 679.096 215.024 708.262 248.32C766.288 315.307 846.502 311.467 846.502 311.467V443.307C780.682 443.42 716.496 422.82 663.035 384.427V652.8C663.035 787.2 554.235 896 420.262 896C295.248 896 177.488 794.88 177.488 652.8C177.488 506.88 306.342 392.533 453.542 412.16V546.987C380.582 524.373 309.755 579.413 309.755 652.8C309.755 714.24 360.102 763.733 420.688 763.733C449.337 763.729 476.866 752.608 497.478 732.712C518.091 712.816 530.178 685.697 531.195 657.067V128H663.035Z"/>
                        </svg>   
                    </a>
                </div>
                <div class="footer-copyright-container">
                    <div>
                        <svg class="footer-logo" viewBox="0 0 1024 1024">
                            <path d="M899.471 169.143V32L124.531 169.143H899.471Z"/>
                            <path d="M757.135 717.714L899.471 224H124.531V498.286H266.867L124.531 992H899.471V717.714H757.135Z"/>
                        </svg>
                    </div>
                    <div>
                        <p>Zé Antonio — Phoneticando</p>
                        <p>&#174;2026 | All Rights Reserved</p>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('component-footer', ComponentFooter);