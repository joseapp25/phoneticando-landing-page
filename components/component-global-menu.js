/* ---------- Dados do sidebar (edite aqui) ---------- */

const ICON_INTERNAL = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4H4V20H20V15H22V22H2V2H9V4ZM21.707 3.70703L11.4141 14H18V16H8V6H10V12.5859L20.293 2.29297L21.707 3.70703Z"/></svg>`;

const ICON_EXTERNAL = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 2H2V22H22V15H20V20H4V4H9V2ZM12 4H18.5859L8.29297 14.293L9.70718 15.7072L20 5.41436V12H22V2H12V4Z"/></svg>`;

const NAV_LINKS = [
    { href: 'index.html', label: 'Início' },
    { href: 'trainer.html', label: 'Phoneticando Trainer' },
    { href: 'aulas.html', label: 'Aulas com Zé' },
    { href: 'sobre.html', label: 'Sobre' }
];

const SITE_LINKS = [
    { href: 'https://trainer.phoneticando.com.br', label: 'trainer.phoneticando.com.br' },
    { href: 'https://hub.phoneticando.com.br', label: 'hub.phoneticando.com.br' }
];

const CONTACTS = [
    {
        href: 'https://wa.me/5521999828080',
        label: '+55 (21) 99982-8080',
        icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.2315 13.8301C16.3801 13.9025 16.4996 13.9607 16.5608 13.9901C16.6102 14.0138 16.6558 14.0348 16.6975 14.0541C16.867 14.1322 16.9746 14.1818 17.0308 14.2701C17.1008 14.3801 17.1008 14.8701 16.8908 15.4501C16.6908 16.0301 15.7008 16.5601 15.2208 16.6301C14.7908 16.6901 14.2508 16.7201 13.6608 16.5301C13.3008 16.4201 12.8408 16.2701 12.2508 16.0101C9.87979 14.9871 8.28572 12.6571 8.0453 12.3057C8.03425 12.2895 8.02606 12.2775 8.02078 12.2701L8.01884 12.2675C7.89149 12.0977 7.01078 10.9237 7.01078 9.71006C7.01078 8.58446 7.55557 7.98662 7.81266 7.7045C7.83422 7.68084 7.85376 7.6594 7.87078 7.64006C8.10078 7.39006 8.36078 7.33006 8.53078 7.33006H9.01078C9.02815 7.33122 9.04632 7.33144 9.06519 7.33166C9.20928 7.3334 9.39394 7.33564 9.57078 7.76006C9.77078 8.26006 10.2708 9.48006 10.3308 9.60006C10.3908 9.72006 10.4308 9.86006 10.3508 10.0301C10.344 10.0437 10.3374 10.057 10.3309 10.07C10.2617 10.209 10.2105 10.312 10.1008 10.4401C10.0625 10.4848 10.0221 10.5335 9.98135 10.5828C9.89444 10.6879 9.80566 10.7952 9.73078 10.8701C9.60078 11.0001 9.48078 11.1301 9.62078 11.3801C9.77078 11.6301 10.2608 12.4401 11.0008 13.1001C11.8045 13.8183 12.5059 14.1198 12.8486 14.2671C12.9067 14.2921 12.9545 14.3127 12.9908 14.3301C13.2408 14.4601 13.3908 14.4401 13.5308 14.2701C13.6708 14.1101 14.1408 13.5501 14.3108 13.3001C14.4808 13.0601 14.6408 13.1001 14.8708 13.1801C15.0369 13.248 15.7732 13.6068 16.2315 13.8301Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.8384 2.75011C17.042 3.24973 18.134 3.98399 19.0508 4.91006C20.9208 6.78006 21.9508 9.27006 21.9508 11.9201C21.9508 17.3801 17.5008 21.8301 12.0408 21.8301C10.3808 21.8301 8.75078 21.4101 7.30078 20.6201L2.05078 22.0001L3.45078 16.8601C2.59078 15.3601 2.13078 13.6601 2.13078 11.9101C2.13078 6.45006 6.58078 2.00006 12.0408 2.00006C13.3439 1.99552 14.6349 2.25049 15.8384 2.75011ZM7.84078 19.0001C9.11078 19.7501 10.5608 20.1501 12.0408 20.1501C16.5808 20.1501 20.2808 16.4601 20.2608 11.9201C20.2648 10.8372 20.0539 9.76425 19.6402 8.76348C19.2265 7.76272 18.6183 6.85402 17.8508 6.09006C16.3008 4.53006 14.2308 3.67006 12.0308 3.67006C7.49078 3.67006 3.79078 7.37006 3.79078 11.9101C3.79192 13.4593 4.22853 14.977 5.05078 16.2901L5.25078 16.6001L4.42078 19.6401L7.54078 18.8201L7.84078 19.0001Z"/></svg>`
    },
    {
        href: 'mailto:contato@phoneticando.com.br',
        label: 'contato@phoneticando.com.br',
        icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3V21H23V3H1ZM3 6.41421V19H21V6.41421L12 15.4142L3 6.41421ZM19.5858 5H4.41421L12 12.5858L19.5858 5Z"/></svg>`
    }
];

const SOCIAL_LINKS = [
    {
        href: 'https://youtube.com/@phoneticando',
        label: 'YouTube',
        icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.84 9.07C21.78 8.27 21.69 7.64 21.56 7.17C21.31 6.27 20.73 5.69 19.83 5.44C18.8 5.16 16.19 5 12 5L10.41 5.06C9.31 5.06 8.12 5.09 6.82 5.16C5.5 5.22 4.64 5.31 4.17 5.44C3.27 5.69 2.69 6.27 2.44 7.17C2.16 8.2 2 9.81 2 12L2.06 12.84C2.06 13.44 2.09 14.13 2.16 14.93C2.22 15.73 2.31 16.36 2.44 16.83C2.69 17.73 3.27 18.31 4.17 18.56C5.2 18.84 7.81 19 12 19L13.59 18.94C14.69 18.94 15.88 18.91 17.18 18.84C18.5 18.78 19.36 18.69 19.83 18.56C20.73 18.31 21.31 17.73 21.56 16.83C21.84 15.8 22 14.19 22 12L21.94 11.16C21.94 10.56 21.91 9.87 21.84 9.07ZM15.19 12L10 15V9L15.19 12Z"/></svg>`
    },
    {
        href: 'https://substack.com/@phoneticando',
        label: 'Substack',
        icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21L12 16.5835L4 21V11.109H20V21Z"/><path d="M20 9.18201H4V7.05396H20V9.18201Z"/><path d="M20 5.12585H4V3H20V5.12585Z"/></svg>`
    },
    {
        href: 'https://linkedin.com/in/phoneticando',
        label: 'LinkedIn',
        icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579ZM18.5 13.2V18.5H15.71V13.57C15.71 13.1987 15.5625 12.8426 15.2999 12.5801C15.0374 12.3175 14.6813 12.17 14.31 12.17C13.54 12.17 12.92 12.8 12.92 13.57V18.5H10.13V10.13H12.92V11.24C13.4 10.46 14.39 9.94 15.24 9.94C16.1046 9.94 16.9338 10.2835 17.5452 10.8948C18.1565 11.5062 18.5 12.3354 18.5 13.2ZM8.06794 8.06794C7.75288 8.383 7.32556 8.56 6.88 8.56C5.95 8.56 5.19 7.81 5.19 6.88C5.19 6.43178 5.36805 6.00193 5.68499 5.68499C6.00193 5.36805 6.43178 5.19 6.88 5.19C7.81 5.19 8.56 5.95 8.56 6.88C8.56 7.32556 8.383 7.75288 8.06794 8.06794ZM8.27 10.13V18.5H5.5V10.13H8.27Z"/></svg>`
    },
    {
        href: 'https://instagram.com/phoneticando',
        label: 'Instagram',
        icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447ZM9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.2 2H7.8C6.26174 2 4.78649 2.61107 3.69878 3.69878C2.61107 4.78649 2 6.26174 2 7.8V16.2C2 19.4 4.6 22 7.8 22H16.2C17.7383 22 19.2135 21.3889 20.3012 20.3012C21.3889 19.2135 22 17.7383 22 16.2V7.8C22 4.6 19.4 2 16.2 2ZM5.05442 5.05442C5.72955 4.37928 6.64522 4 7.6 4H16.4C18.39 4 20 5.61 20 7.6V16.4C20 17.3548 19.6207 18.2705 18.9456 18.9456C18.2705 19.6207 17.3548 20 16.4 20H7.6C5.61 20 4 18.39 4 16.4V7.6C4 6.64522 4.37928 5.72955 5.05442 5.05442Z"/></svg>`
    },
    {
        href: 'https://tiktok.com/@phoneticando',
        label: 'TikTok',
        icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5402 3C15.5399 4.03743 15.9166 5.03962 16.6002 5.82C17.9602 7.39 19.8402 7.3 19.8402 7.3V10.39C18.2975 10.3926 16.7932 9.90985 15.5402 9.01V15.3C15.5402 18.45 12.9902 21 9.85016 21C6.92016 21 4.16016 18.63 4.16016 15.3C4.16016 11.88 7.18016 9.2 10.6302 9.66V12.82C8.92016 12.29 7.26016 13.58 7.26016 15.3C7.26016 16.74 8.44016 17.9 9.86016 17.9C10.5316 17.8999 11.1768 17.6393 11.6599 17.1729C12.143 16.7066 12.4263 16.071 12.4502 15.4V3H15.5402Z"/></svg>`
    }
];

/* ---------- Helpers de renderização ---------- */

const isExternal = (href) => href.startsWith('http');

const renderItem = ({ href, label, icon, current }) => {
    const external = isExternal(href);
    // Links externos sem ícone próprio usam o ícone de "abrir em nova aba"
    icon = icon ?? (external ? ICON_EXTERNAL : ICON_INTERNAL);
    return `
        <li>
            <a href="${href}"
               ${external ? 'target="_blank" rel="noopener noreferrer"' : ''}
               ${current ? 'aria-current="page"' : ''}>
                <span class="sidebar-icon" aria-hidden="true">${icon}</span>
                <span>${label}</span>
            </a>
        </li>`;
};

const renderSection = (id, title, items) => `
    <section class="sidebar-section" aria-labelledby="${id}">
        <h3 class="sidebar-section-title" id="${id}">${title}</h3>
        <ul>${items.map(renderItem).join('')}</ul>
    </section>`;

const currentFile = () => {
    const file = location.pathname.split('/').pop();
    return file === '' ? 'index.html' : file;
};

/* ---------- Componente ---------- */

class ComponentGlobalMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Handlers com referência fixa, para o removeEventListener funcionar de verdade
        this._onToggle = () => this.handleToggle();
        this._onClose = () => this.close();
        this._onKeydown = (e) => {
            if (e.key === 'Escape' && this.hasAttribute('open')) this.close();
        };
    }

    connectedCallback() {
        this.render();

        this._button = this.shadowRoot.querySelector('.hamburger-menu-button');
        this._sidebar = this.shadowRoot.querySelector('.sidebar');
        this._overlay = this.shadowRoot.querySelector('.sidebar-overlay');
        this._closeBtn = this.shadowRoot.querySelector('.sidebar-close');

        this._button.addEventListener('click', this._onToggle);
        this._closeBtn.addEventListener('click', this._onClose);
        this._overlay.addEventListener('click', this._onClose);
        document.addEventListener('keydown', this._onKeydown);
    }

    disconnectedCallback() {
        this._button?.removeEventListener('click', this._onToggle);
        this._closeBtn?.removeEventListener('click', this._onClose);
        this._overlay?.removeEventListener('click', this._onClose);
        document.removeEventListener('keydown', this._onKeydown);
        document.body.style.overflow = '';
    }

    handleToggle() {
        this.hasAttribute('open') ? this.close() : this.open();
    }

    open() {
        this.setAttribute('open', '');
        this._sidebar.classList.add('is-open');
        this._overlay.classList.add('is-open');
        this._sidebar.removeAttribute('inert');
        this._sidebar.setAttribute('aria-hidden', 'false');
        this._button.setAttribute('aria-expanded', 'true');
        this._button.setAttribute('aria-label', 'Close menu');
        document.body.style.overflow = 'hidden'; // trava o scroll da página
        this._closeBtn.focus();
        this._emit(true);
    }

    close() {
        this.removeAttribute('open');
        this._sidebar.classList.remove('is-open');
        this._overlay.classList.remove('is-open');
        this._sidebar.setAttribute('inert', '');
        this._sidebar.setAttribute('aria-hidden', 'true');
        this._button.setAttribute('aria-expanded', 'false');
        this._button.setAttribute('aria-label', 'Open menu');
        document.body.style.overflow = '';
        this._button.focus();
        this._emit(false);
    }

    _emit(open) {
        this.dispatchEvent(new CustomEvent('menu-toggle', {
            detail: { open },
            bubbles: true,
            composed: true
        }));
    }

    render() {
        const file = currentFile();
        const navItems = NAV_LINKS.map((l) => ({
            ...l,
            icon: ICON_INTERNAL,
            current: l.href === file
        }));

        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="styles/style.css">

            <style>

                .global-menu {
                    position: fixed;
                    display: flex;
                    width: 100%;
                    height: 48px;
                    top: 0;
                    background-color: var(--graycool1000);
                    z-index: 4;
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
                        padding-left: 16px;
                        padding-right: 16px;
                    }
                }

            </style>

            <style>

                .global-menu-logo {
                    width: 24px;
                    height: 24px;
                }

                .global-menu-logo-anchor {
                    display: flex;
                    gap: 4px;
                    fill: var(--graycool0);
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

                .global-menu-logo-anchor:active {
                    fill: var(--cerulean600);
                    transition-duration: 0.2s;
                }

            </style>

            <style>

                .phoneticando-text {
                    font-size: 16px;
                    font-weight: 300;
                }

                .phoneticando-text-anchor {
                    text-decoration: none;
                    transition-duration: 0.2s;
                    color: var(--graycool0);
                }

                .phoneticando-text-anchor:hover {
                    color: var(--sunset600);
                    transition-duration: 0.2s;
                }

                .phoneticando-text-anchor:active {
                    color: var(--cerulean600);
                    transition-duration: 0.2s;
                }

            </style>

            <style>

                .hamburger-menu-icon {
                    width: 24px;
                    height: 24px;
                }

                .hamburger-menu-button {
                    background: none;
                    border: none;
                    padding: 0;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition-duration: 0.2s;
                    fill: var(--graycool0);
                }

                .hamburger-menu-button:hover {
                    transition-duration: 0.2s;
                    cursor: pointer;
                    fill: var(--sunset600);
                }

                .hamburger-menu-button:active {
                    fill: var(--cerulean600);
                    transition-duration: 0.2s;
                }

            </style>

            <style>

                /* ---------- Sidebar ---------- */

                .sidebar-overlay {
                    position: fixed;
                    inset: 0;
                    background-color: rgb(28 28 34 / 0.5);
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.3s ease, visibility 0.3s;
                    z-index: 100;
                }

                .sidebar-overlay.is-open {
                    opacity: 1;
                    visibility: visible;
                }

                .sidebar {
                    position: fixed;
                    top: 0;
                    right: 0;
                    height: 100%;
                    width: min(400px, 88vw);
                    display: flex;
                    flex-direction: column;
                    background-color: var(--graycool0);
                    color: var(--graycool1000);
                    font-family: var(--font-dm-sans, sans-serif);
                    box-shadow: -4px 0 24px rgb(28 28 34 / 0.15);
                    z-index: 101;

                    /* fechado: fora da tela à direita */
                    transform: translateX(100%);
                    visibility: hidden;
                    transition: transform 0.3s ease, visibility 0.3s;
                }

                .sidebar.is-open {
                    transform: translateX(0);
                    visibility: visible;
                }

                .sidebar-header {
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 48px;
                    padding: 0 16px;
                    color: var(--graycool0);
                    background-color: var(--graycool1000);
                }

                .sidebar-title {
                    margin: 0;
                    font-size: 1rem;
                    font-weight: 800;
                    font-family: var(--font-inter-tight, sans-serif);
                    letter-spacing: 0.05rem;
                }

                .sidebar-close {
                    background: none;
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                    color: var(--sunset600);
                    fill: var(--sunset600);
                    transition-duration: 0.2s;
                    cursor: pointer;
                }

                .sidebar-close:hover {
                    color: var(--cerulean600);
                    fill: var(--cerulean600);
                }

                .sidebar-close-icon {
                    width: 24px;
                    height: 24px;
                }

                /* área rolável */
                .sidebar-content {
                    flex: 1;
                    overflow-y: auto;
                    overscroll-behavior: contain;
                    padding: 0 16px;
                }

                .sidebar-section {
                    padding: 12px 0;
                    margin: 0;
                }

                .sidebar-section-title {
                    margin: 0 0 8px;
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: var(--graycool600);
                }

                .sidebar-section ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                .sidebar-section li {
                    margin-top: 4px;
                    margin-bottom: 4px;
                }

                .sidebar-section a {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px;
                    border-radius: 4px;
                    color: var(--graycool1000);
                    fill: var(--graycool1000);
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: all 0.2s ease;
                }

                .sidebar-section a:hover {
                    color: var(--sunset600);
                    fill: var(--sunset600);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 16px var(--graycool300);
                }

                .sidebar-section a:active {
                    color: var(--cerulean600);
                    fill: var(--cerulean600);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 16px var(--graycool300);
                }

                .sidebar-section a[aria-current='page'] {
                    background-color: var(--sunset600);
                    color: var(--graycool0);
                    fill: var(--graycool0);
                }

                .sidebar-icon {
                    flex-shrink: 0;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 24px;
                    height: 24px;
                }

                .sidebar-icon svg {
                    width: 100%;
                    height: 100%;
                    fill: currentColor;
                }

                .sidebar-footer {
                    flex-shrink: 0;
                    padding: 16px;
                    text-align: center;
                    color: var(--graycool0);
                    background-color: var(--graycool1000);
                    font-size: 0.9rem;
                }

                .sidebar-footer-copyright-container {
                    padding: 4px;
                    display: flex;
                    gap: 4px;
                    align-items: center;
                    justify-content: left;
                }

                .sidebar-footer-all-rights-reserved {
                    display: flex;
                    gap: 4px;
                    font-size: 12px;
                    font-weight: 500;
                }

                .sidebar-footer-all-rights-reserved p {
                    margin: 0;
                }

                .sidebar-footer-logo {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 24px;
                    width: 24px;
                    fill: var(--sunset600);
                }

                @media (prefers-reduced-motion: reduce) {
                    .sidebar,
                    .sidebar-overlay {
                        transition: none;
                    }
                }

            </style>

            <!-- Barra do topo (inalterada) -->
            <div class="global-menu">

                <div class="global-menu-container">

                    <a href="index.html" class="global-menu-logo-anchor">
                        <svg class="global-menu-logo" viewBox="0 0 1024 1024">
                            <path d="M899.471 169.143V32L124.531 169.143H899.471Z"/>
                            <path d="M757.135 717.714L899.471 224H124.531V498.286H266.867L124.531 992H899.471V717.714H757.135Z"/>
                        </svg>
                    </a>

                    <a href="#" class="phoneticando-text-anchor">
                        <div>
                            <span class="phoneticando-text">Phoneticando | <slot></slot></span>
                        </div>
                    </a>

                    <button class="hamburger-menu-button" aria-label="Open menu" aria-expanded="false" aria-controls="menu-container">
                        <svg class="hamburger-menu-icon" viewBox="0 0 1024 1024">
                            <path d="M853.334 341.333H170.667V256H853.334V341.333Z" />
                            <path d="M853.334 554.667H170.667V469.333H853.334V554.667Z" />
                            <path d="M170.667 768H853.334V682.667H170.667V768Z" />
                        </svg>
                    </button>

                </div>

            </div>

            <!-- Fundo escurecido -->
            <div class="sidebar-overlay"></div>

            <!-- Sidebar -->
            <aside class="sidebar" id="menu-container" aria-label="Menu lateral" aria-hidden="true" inert>

                <header class="sidebar-header">
                    <h2 class="sidebar-title">Phoneticando</h2>
                    <button type="button" class="sidebar-close" aria-label="Fechar menu">
                        <svg class="sidebar-close-icon" viewBox="0 0 1024 1024" aria-hidden="true">
                            <path d="M256 213.333L810.667 768L768 810.667L213.333 256L256 213.333Z"></path>
                            <path d="M768 213.333L810.667 256L256 810.667L213.333 768L768 213.333Z"></path>
                        </svg>
                    </button>
                </header>

                <div class="sidebar-content">
                    ${renderSection('sb-nav', 'Navegue', navItems)}
                    ${renderSection('sb-phoneticando', 'Phoneticando', SITE_LINKS)}
                    ${renderSection('sb-contatos', 'Contatos', CONTACTS)}
                    ${renderSection('sb-social', 'Redes sociais', SOCIAL_LINKS)}
                </div>

                <footer class="sidebar-footer">
                    <div class="sidebar-footer-copyright-container">
                        <div>
                            <svg class="sidebar-footer-logo" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M21.0806 3.96429V0.75L2.91797 3.96429H21.0806Z" />
                                <path d="M17.7446 16.8214L21.0806 5.25H2.91797V11.6786H6.25397L2.91797 23.25H21.0806V16.8214H17.7446Z" />
                            </svg>
                        </div>
                        <div class="sidebar-footer-all-rights-reserved">
                            <span>Copyright</span>
                            <span>&#169;</span>
                            <span>${new Date().getFullYear()}</span>
                            <span>|</span>
                            <p>Todos os Direitos Reservados</p>
                        </div>
                    </div>
                </footer>

            </aside>
        `;
    }
}

customElements.define('component-global-menu', ComponentGlobalMenu);