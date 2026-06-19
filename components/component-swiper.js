class ComponentSwiper extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    const slides = Array.from(this.querySelectorAll('swiper-slide'));
    const total = slides.length;
    let current = 0;

    // Style
    const style = document.createElement('style');
    style.textContent = `
      .wrapper {
          overflow: hidden;
      }

      .track {
          display: flex;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
      }

      .slide {
          padding-top: 16px;
          padding-bottom: 16px;
          min-width: 100%;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 16px;
      }

      .controls {
          display: flex;
          align-items: center;
          justify-content: center;
      }

      .prev,
      .next {
          padding: 0;
          background: none;
          border: none;
      }

      .chevron-svg-icons {
          display: flex;
          width: 32px;
          height: 32px;
          fill: var(--graycool800);
          cursor: pointer;
          transition-duration: 0.2s;
      }

      .chevron-svg-icons:hover {
          fill: var(--sunset600);
          transition-duration: 0.2s;
      }

      .chevron-svg-icons:active {
          fill: var(--cerulean600);
          transition-duration: 0.2s;
      }

      button:disabled {
          opacity: 0.3;
          cursor: not-allowed;
      }

      .dots {
          display: flex;
          gap: 8px;
      }

      .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--cerulean300);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.2s, transform 0.2s;
      }

      .dot.active {
          background: var(--cerulean600);
          transform: scale(1.5);
      }
    `;

    // Stylesheets
    const styleMain = document.createElement('link');
    styleMain.rel = 'stylesheet';
    styleMain.href = 'styles/style.css';

    const styleTrainer = document.createElement('link');
    styleTrainer.rel = 'stylesheet';
    styleTrainer.href = 'styles/ipa.css';

    // Track — move nodes instead of copying innerHTML
    const track = document.createElement('div');
    track.className = 'track';

    slides.forEach(s => {
      const slideDiv = document.createElement('div');
      slideDiv.className = 'slide';

      while (s.firstChild) {
        slideDiv.appendChild(s.firstChild);
      }

      track.appendChild(slideDiv);
    });

    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    wrapper.appendChild(track);

    // Controls
    const prev = document.createElement('button');
    prev.className = 'prev';
    prev.disabled = true;
    prev.innerHTML = `
      <svg class="chevron-svg-icons" viewBox="0 0 1024 1024">
        <path d="M624.917 210.75L685.25 271.083L459.417 496.917L685.25 722.75L624.917 783.083L338.75 496.917L624.917 210.75Z" />
      </svg>
    `;

    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'dots';

    const next = document.createElement('button');
    next.className = 'next';
    next.innerHTML = `
      <svg class="chevron-svg-icons" viewBox="0 0 1024 1024">
        <path d="M399.083 783.083L338.75 722.75L564.583 496.917L338.75 271.083L399.083 210.75L685.25 496.917L399.083 783.083Z" />
      </svg>
    `;

    const controls = document.createElement('div');
    controls.className = 'controls';
    controls.append(prev, dotsContainer, next);

    shadow.append(styleMain, styleTrainer, style, wrapper, controls);

    // Dots
    const dots = Array.from({ length: total }, (_, i) => {
      const d = document.createElement('button');
      d.className = 'dot';
      d.setAttribute('aria-label', `Slide ${i + 1}`);
      d.onclick = () => goTo(i);
      dotsContainer.appendChild(d);
      return d;
    });

    // Touch support
    let startX = 0;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    }, { passive: true });

    function goTo(idx) {
      current = Math.max(0, Math.min(total - 1, idx));
      track.style.transform = `translateX(-${current * 100}%)`;
      prev.disabled = current === 0;
      next.disabled = current === total - 1;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function go(dir) { goTo(current + dir); }

    prev.addEventListener('click', () => go(-1));
    next.addEventListener('click', () => go(1));

    goTo(0);
  }
}

customElements.define('component-swiper', ComponentSwiper);