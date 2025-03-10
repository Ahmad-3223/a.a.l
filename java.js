// Добавляем эффект затемнения в шапке при прокрутке
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Добавляем анимацию появления элементов
document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll("section");
    sections.forEach(sec => {
        sec.classList.add("hidden");
    });

    window.addEventListener("scroll", function() {
        sections.forEach(sec => {
            if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
                sec.classList.add("visible");
            }
        });
    });
});
