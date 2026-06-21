const toggleMenuEl = document.getElementById("toggle-menu");

toggleMenuEl?.addEventListener("click", () => {
    const menuEl = document.getElementById("menu");

    menuEl?.classList.toggle("active");
});


const matchMedia = window.matchMedia('(min-width: 1024px');
matchMedia.addEventListener('change', () => {
    if (matchMedia.matches) {
        document.getElementById('menu')?.classList.remove('active');
    }
});
