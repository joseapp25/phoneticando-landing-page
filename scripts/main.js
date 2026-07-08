const letters = document.querySelectorAll(".alphabet-letter, .voiced, .voiceless");

letters.forEach(letter => {

    letter.addEventListener("mouseenter", () => {
    if (!letter.classList.contains("clicked-alphabet") &&
    !letter.classList.contains("clicked-voiced") &&
    !letter.classList.contains("clicked-voiceless")) {

    if (letter.classList.contains("alphabet-letter")) {
    letter.classList.add("hovered-alphabet");
    } else if (letter.classList.contains("voiced")) {
    letter.classList.add("hovered-voiced");
    } else if (letter.classList.contains("voiceless")) {
    letter.classList.add("hovered-voiceless");
    }
    }
    });

    letter.addEventListener("mouseleave", () => {
    letter.classList.remove("hovered-alphabet", "hovered-voiced", "hovered-voiceless");
    });

    letter.addEventListener("click", () => {
    const audioSrc = letter.getAttribute("data-audio");
    const audio = new Audio(audioSrc);

    letter.classList.remove("hovered-alphabet", "hovered-voiced", "hovered-voiceless");

    if (letter.classList.contains("alphabet-letter")) {
    letter.classList.add("clicked-alphabet");
    } else if (letter.classList.contains("voiced")) {
    letter.classList.add("clicked-voiced");
    } else if (letter.classList.contains("voiceless")) {
    letter.classList.add("clicked-voiceless");
    }

    audio.addEventListener("ended", () => {
    letter.classList.remove("clicked-alphabet", "clicked-voiced", "clicked-voiceless");
    });

    audio.play();
    });

});

/*(function () {
  const viewport   = document.querySelector('.social-carousel-viewport');
  const track       = document.getElementById('socialCarouselTrack');
  const prevBtn     = document.querySelector('.social-carousel-nav-prev');
  const nextBtn     = document.querySelector('.social-carousel-nav-next');
  const dotsWrap    = document.getElementById('socialCarouselDots');
 
  const AUTOPLAY_MS = 5000; // change every few seconds here
 
  // 1. Grab the real cards, then clone the first and last for a seamless loop
  const realCards = Array.from(track.children);
  const slideCount = realCards.length;
 
  const firstClone = realCards[0].cloneNode(true);
  const lastClone  = realCards[slideCount - 1].cloneNode(true);
  firstClone.setAttribute('aria-hidden', 'true');
  lastClone.setAttribute('aria-hidden', 'true');
 
  track.insertBefore(lastClone, track.firstChild);
  track.appendChild(firstClone);
 
  // index 0 = lastClone, index 1..slideCount = real cards, index slideCount+1 = firstClone
  let currentIndex = 1;
  let step = 0; // px per slide, computed below
  let autoplayTimer = null;
  let isDragging = false;
  let dragStartX = 0;
  let dragDelta = 0;
 
  function measureStep() {
    const card = track.children[currentIndex];
    const style = getComputedStyle(track);
    const gap = parseFloat(style.gap || style.columnGap || '0');
    step = card.getBoundingClientRect().width + gap;
  }
 
  function goTo(index, animate = true) {
    track.style.transition = animate ? 'transform 0.5s ease' : 'none';
    track.style.transform = `translateX(${-index * step}px)`;
    currentIndex = index;
    updateDots();
  }
 
  function next() {
    goTo(currentIndex + 1);
  }
 
  function prev() {
    goTo(currentIndex - 1);
  }
 
  // Snap invisibly when we land on a clone, so the loop feels infinite
  track.addEventListener('transitionend', () => {
    if (currentIndex === slideCount + 1) {
      currentIndex = 1;
      goTo(currentIndex, false);
    } else if (currentIndex === 0) {
      currentIndex = slideCount;
      goTo(currentIndex, false);
    }
  });
 
  // ---------- dots ----------
  function buildDots() {
    dotsWrap.innerHTML = '';
    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'social-carousel-dot';
      dot.setAttribute('aria-label', `Ir para depoimento ${i + 1}`);
      dot.addEventListener('click', () => {
        goTo(i + 1); // +1 to account for the lastClone at index 0
        restartAutoplay();
      });
      dotsWrap.appendChild(dot);
    }
    updateDots();
  }
 
  function updateDots() {
    const realIndex = ((currentIndex - 1) + slideCount) % slideCount;
    Array.from(dotsWrap.children).forEach((dot, i) => {
      dot.classList.toggle('is-active', i === realIndex);
    });
  }
 
  // ---------- autoplay ----------
  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(next, AUTOPLAY_MS);
  }
  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }
  function restartAutoplay() {
    startAutoplay();
  }
 
  // ---------- manual buttons ----------
  nextBtn.addEventListener('click', () => {
    next();
    restartAutoplay();
  });
  prevBtn.addEventListener('click', () => {
    prev();
    restartAutoplay();
  });
 
  // pause while the user is reading / hovering / focused inside
  viewport.addEventListener('mouseenter', stopAutoplay);
  viewport.addEventListener('mouseleave', startAutoplay);
  viewport.addEventListener('focusin', stopAutoplay);
  viewport.addEventListener('focusout', startAutoplay);
 
  // ---------- swipe / drag support ----------
  function pointerDown(x) {
    isDragging = true;
    dragStartX = x;
    dragDelta = 0;
    track.classList.add('is-dragging');
    stopAutoplay();
  }
  function pointerMove(x) {
    if (!isDragging) return;
    dragDelta = x - dragStartX;
    track.style.transform = `translateX(${-currentIndex * step + dragDelta}px)`;
  }
  function pointerUp() {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove('is-dragging');
 
    const threshold = step * 0.2; // drag more than 20% of a card to trigger a swipe
    if (dragDelta < -threshold) {
      next(); // swiped left -> go to next testimonial
    } else if (dragDelta > threshold) {
      prev(); // swiped right -> go to previous testimonial
    } else {
      goTo(currentIndex); // snap back
    }
    restartAutoplay();
  }
 
  // touch
  viewport.addEventListener('touchstart', (e) => pointerDown(e.touches[0].clientX), { passive: true });
  viewport.addEventListener('touchmove',  (e) => pointerMove(e.touches[0].clientX), { passive: true });
  viewport.addEventListener('touchend',   pointerUp);
 
  // mouse drag (nice to have on desktop too)
  viewport.addEventListener('mousedown', (e) => { e.preventDefault(); pointerDown(e.clientX); });
  window.addEventListener('mousemove', (e) => pointerMove(e.clientX));
  window.addEventListener('mouseup', pointerUp);
 
  // ---------- init ----------
  function init() {
    measureStep();
    goTo(currentIndex, false);
    buildDots();
    startAutoplay();
  }
 
  window.addEventListener('resize', () => {
    measureStep();
    goTo(currentIndex, false);
  });
 
  init();
})();*/