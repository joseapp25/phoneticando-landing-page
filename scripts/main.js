

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