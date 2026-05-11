class ComponentFooter extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML=`

            <link rel="stylesheet" href="style.css">

            <style scoped>
                .footer-style {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    gap: 8px;
                    background-color: var(--graycool1000);
                    color: var(--graycool0);
                    padding-top: 24px;
                    padding-bottom: 24px;
                    padding-left: 24px;
                }

                @media only screen and (min-width: 600px) {
                    .footer-style {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                }

                .website-anchor {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--sunset600);
                    text-decoration: none;
                    transition-duration: 0.2s;
                    font-weight: 900;
                    font-size: 24px;
                    padding: 4px;
                }

                .website-anchor:hover {
                    color: var(--sunset300);
                    text-decoration: underline;
                    transition-duration: 0.2s;
                    border-radius: 4px;
                }

                .social-container {
                    gap: 4px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .social-link {
                    height: 24px;
                    width: 24px;
                    border-radius: 4px;
                    padding: 4px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition-duration: 0.2s;
                    fill: var(--cerulean600);
                }

                .social-link:hover {
                    background-color: var(--cerulean600);
                    transition-duration: 0.2s;
                    box-shadow: 0px 0px 4px var(--cerulean600);
                    fill: var(--graycool50);
                }

                .social-link-text {
                    display: flex;
                    gap: 8px;
                    font-weight: 600;
                }

                .contacts-link {
                    text-decoration: none;
                    padding: 4px;
                    border-radius: 4px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--cerulean100);
                    fill: var(--cerulean600);
                    transition-duration: 0.2s;
                    gap: 4px;
                }

                .contacts-link:hover {
                    background-color: var(--cerulean600);
                    box-shadow: 0px 0px 4px var(--cerulean600);
                    color: var(--graycool0);
                    fill: var(--graycool0);
                    transition-duration: 0.2s;
                }

                .contacts-link-icon {
                    display: flex;
                    justify-content: center;
                    height: 24px;
                    width: 24px;
                }

                .footer-copyright-container {
                    padding: 4px;
                    display: flex;
                    gap: 4px;
                    align-items: center;
                    justify-content: center;
                }

                .footer-all-rights-reserved {
                    display: flex;
                    gap: 4px;
                    font-size: 12px;
                    font-weight: 300;
                }

                .footer-logo {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 16px;
                    width: 16px;
                    fill: var(--cerulean100);
                }
            </style>

            <div class="footer-style">
                <a href="https://phoneticando.com.br" target="_blank" class="website-anchor">phoneticando.com.br</a>
                <div class="social-container">
                    <a href="https://youtube.com/@phoneticando" target="_blank">
                        <svg class="social-link" viewBox="0 0 1024 1024">
                            <g clip-path="url(#clip0_3507_1895)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M931.839 386.986C929.279 352.853 925.439 325.973 919.892 305.92C909.225 267.52 884.479 242.773 846.079 232.106C802.132 220.16 690.772 213.333 511.999 213.333L444.159 215.893C397.225 215.893 346.452 217.173 290.985 220.16C234.665 222.72 197.972 226.56 177.919 232.106C139.519 242.773 114.772 267.52 104.105 305.92C92.1587 349.866 85.332 418.56 85.332 512L87.892 547.84C87.892 573.44 89.172 602.88 92.1587 637.013C94.7187 671.146 98.5587 698.026 104.105 718.08C114.772 756.48 139.519 781.226 177.919 791.893C221.865 803.84 333.225 810.666 511.999 810.666L579.839 808.106C626.772 808.106 677.545 806.826 733.012 803.84C789.332 801.28 826.025 797.44 846.079 791.893C884.479 781.226 909.225 756.48 919.892 718.08C931.839 674.133 938.665 605.44 938.665 512L936.105 476.16C936.105 450.56 934.825 421.12 931.839 386.986ZM648.105 512L426.665 640V384L648.105 512Z"/>
                            </g>
                        </svg>
                    </a>
                    <a href="https://substack.com/@phoneticando" target="_blank">
                        <svg class="social-link" viewBox="0 0 1024 1024">
                            <path d="M853.334 896L512 707.562L170.667 896V473.984H853.334V896Z" />
                            <path d="M853.334 391.766H170.667V300.969H853.334V391.766Z" />
                            <path d="M853.334 218.703H170.667V128H853.334V218.703Z" />
                        </svg>
                    </a>
                    <a href="https://instagram.com/phoneticando" target="_blank">
                        <svg class="social-link" viewBox="0 0 1024 1024">
                            <path d="M773.711 250.287C763.709 240.285 750.144 234.666 735.999 234.666C721.854 234.666 708.288 240.285 698.286 250.287C688.284 260.289 682.665 273.855 682.665 288C682.665 302.145 688.284 315.71 698.286 325.712C708.288 335.714 721.854 341.333 735.999 341.333C750.144 341.333 763.709 335.714 773.711 325.712C783.713 315.71 789.332 302.145 789.332 288C789.332 273.855 783.713 260.289 773.711 250.287Z"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M662.848 361.15C622.84 321.142 568.578 298.666 511.999 298.666C455.419 298.666 401.157 321.142 361.149 361.15C321.141 401.158 298.665 455.42 298.665 512C298.665 568.579 321.141 622.841 361.149 662.849C401.157 702.857 455.419 725.333 511.999 725.333C568.578 725.333 622.84 702.857 662.848 662.849C702.856 622.841 725.332 568.579 725.332 512C725.332 455.42 702.856 401.158 662.848 361.15ZM421.489 421.49C445.494 397.485 478.051 384 511.999 384C545.946 384 578.504 397.485 602.508 421.49C626.513 445.495 639.999 478.052 639.999 512C639.999 545.947 626.513 578.505 602.508 602.509C578.504 626.514 545.946 640 511.999 640C478.051 640 445.494 626.514 421.489 602.509C397.484 578.505 383.999 545.947 383.999 512C383.999 478.052 397.484 445.495 421.489 421.49Z"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M691.199 85.333H332.799C267.166 85.333 204.222 111.405 157.813 157.814C111.404 204.223 85.332 267.167 85.332 332.8V691.2C85.332 827.733 196.265 938.666 332.799 938.666H691.199C756.831 938.666 819.775 912.594 866.184 866.185C912.593 819.776 938.665 756.832 938.665 691.2V332.8C938.665 196.266 827.732 85.333 691.199 85.333ZM215.654 215.655C244.459 186.849 283.528 170.666 324.265 170.666H699.732C784.639 170.666 853.332 239.36 853.332 324.266V699.733C853.332 740.47 837.149 779.539 808.344 808.345C779.538 837.15 740.469 853.333 699.732 853.333H324.265C239.359 853.333 170.665 784.64 170.665 699.733V324.266C170.665 283.529 186.848 244.46 215.654 215.655Z"/>
                        </svg>
                    </a>
                    <a href="https://tiktok.com/@phoneticando" target="_blank">
                        <svg class="social-link" viewBox="0 0 1024 1024">
                            <path d="M663.035 128C663.023 172.264 679.096 215.024 708.262 248.32C766.288 315.307 846.502 311.467 846.502 311.467V443.307C780.682 443.42 716.496 422.82 663.035 384.427V652.8C663.035 787.2 554.235 896 420.262 896C295.248 896 177.488 794.88 177.488 652.8C177.488 506.88 306.342 392.533 453.542 412.16V546.987C380.582 524.373 309.755 579.413 309.755 652.8C309.755 714.24 360.102 763.733 420.688 763.733C449.337 763.729 476.866 752.608 497.478 732.712C518.091 712.816 530.178 685.697 531.195 657.067V128H663.035Z"/>
                        </svg> 
                    </a>
                    <div class="social-link-text">
                        <span>|</span>
                        <p>@phoneticando</p>
                    </div>
                </div>
                <div>
                    <a class="contacts-link" href="https://wa.me/5521999828080" target="_blank">
                        <svg class="contacts-link-icon" viewBox="0 0 1024 1024">
                            <g clip-path="url(#clip0_3507_1893)">
                            <path d="M692.513 590.085C698.855 593.176 703.95 595.658 706.562 596.912C708.672 597.925 710.615 598.82 712.397 599.642C719.627 602.976 724.219 605.094 726.615 608.859C729.602 613.552 729.602 634.458 720.642 659.205C712.109 683.952 669.869 706.565 649.389 709.552C631.042 712.112 608.002 713.392 582.829 705.285C567.469 700.592 547.842 694.192 522.669 683.099C421.507 639.452 353.493 540.038 343.235 525.044C342.763 524.355 342.414 523.844 342.189 523.525L342.106 523.414C336.672 516.172 299.095 466.079 299.095 414.299C299.095 366.273 322.34 340.765 333.309 328.728C334.229 327.719 335.062 326.804 335.789 325.978C345.602 315.312 356.695 312.752 363.949 312.752H384.429C385.17 312.801 385.945 312.811 386.75 312.82C392.898 312.895 400.777 312.99 408.322 331.098C416.855 352.432 438.189 404.485 440.749 409.605C443.309 414.725 445.015 420.698 441.602 427.952C441.311 428.534 441.029 429.101 440.754 429.654C437.803 435.588 435.619 439.981 430.935 445.445C429.301 447.352 427.579 449.433 425.84 451.536C422.132 456.018 418.344 460.597 415.149 463.792C409.602 469.338 404.482 474.885 410.455 485.552C416.855 496.218 437.762 530.779 469.335 558.938C503.628 589.583 533.554 602.448 548.177 608.734C550.656 609.8 552.696 610.676 554.242 611.418C564.909 616.965 571.309 616.112 577.282 608.859C583.255 602.032 603.309 578.138 610.562 567.472C617.815 557.232 624.642 558.938 634.455 562.352C641.543 565.251 672.958 580.558 692.513 590.085Z" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M675.741 117.341C727.092 138.658 773.685 169.986 812.802 209.498C892.589 289.285 936.535 395.525 936.535 508.592C936.535 741.552 746.669 931.418 513.709 931.418C442.882 931.418 373.335 913.499 311.469 879.792L87.4688 938.672L147.202 719.365C110.509 655.365 90.8821 582.832 90.8821 508.165C90.8821 275.205 280.749 85.3385 513.709 85.3385C569.308 85.1448 624.39 96.0237 675.741 117.341ZM334.509 810.672C388.695 842.672 450.562 859.738 513.709 859.738C707.415 859.738 865.282 702.299 864.429 508.592C864.601 462.388 855.6 416.61 837.95 373.911C820.299 331.212 794.348 292.441 761.602 259.845C695.469 193.285 607.149 156.592 513.282 156.592C319.575 156.592 161.709 314.458 161.709 508.165C161.757 574.266 180.386 639.022 215.469 695.045L224.002 708.272L188.589 837.978L321.709 802.992L334.509 810.672Z" />
                            </g>
                            <defs>
                            <clipPath id="clip0_3507_1893">
                            <rect width="1024" height="1024"/>
                            </clipPath>
                            </defs>
                        </svg>
                        +55 (21) 99982-8080
                    </a>
                </div>
                <div>
                    <a class="contacts-link" href="mailto:contato@phoneticando.com.br" target="_blank">
                    <svg class="contacts-link-icon" viewBox="0 0 1024 1024">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M42.667 128V896H981.334V128H42.667ZM128 273.673V810.667H896V273.673L512 657.673L128 273.673ZM835.661 213.333H188.34L512 536.994L835.661 213.333Z" />
                    </svg>
                        contato@phoneticando.com.br
                    </a>
                </div>
                <div class="footer-copyright-container">
                    <div>
                        <svg class="footer-logo" viewBox="0 0 1024 1024">
                            <path d="M899.471 169.143V32L124.531 169.143H899.471Z"/>
                            <path d="M757.135 717.714L899.471 224H124.531V498.286H266.867L124.531 992H899.471V717.714H757.135Z"/>
                        </svg>
                    </div>
                    <div class="footer-all-rights-reserved">
                        <p>Zé Antonio — Phoneticando</p>
                        <span>|</span>
                        <p>&#174;2026</p>
                        <span>|</span>
                        <p>All Rights Reserved</p>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('component-footer', ComponentFooter);