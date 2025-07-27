(function () {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.getElementById("navbar-bottom");
    const threshold = 100;

    document.querySelectorAll('.slim-select').forEach((el) => {

    });

    if (navbar) {
        window.addEventListener("scroll", function () {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (Math.abs(currentScrollTop - lastScrollTop) <= threshold) return;

            if (currentScrollTop > lastScrollTop) {
                // Runterscrollen → ausblenden
                navbar.style.transform = "translateY(100%)";
            } else {
                // Hochschrollen → einblenden
                navbar.style.transform = "translateY(0)";
            }

            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        });
    }


})();

function toggleCollapse(id) {
    const el = document.getElementById(id);
    el.classList.toggle('open');

    // Optional: Wenn nur einer offen sein darf
    /*if (id === 'filters') {
        document.getElementById('sort').classList.remove('open');
        document.getElementById('search').classList.remove('open');
    } else if (id === 'sort') {
        document.getElementById('filters').classList.remove('open');
        document.getElementById('search').classList.remove('open');
    } else if (id === 'search') {
        document.getElementById('filters').classList.remove('open');
        document.getElementById('sort').classList.remove('open');
    }*/
}

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('sliderWrapper');
    const triggers = document.querySelectorAll('.slide-trigger');
    const panels = Array.from(wrapper.children);
    let currentIndex = null; // Merkt sich, welches Panel aktuell aktiv ist

    const resetButtons = () => {
        triggers.forEach(btn => btn.classList.remove('active-button'));
    };

    triggers.forEach((btn) => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const index = panels.findIndex(p => p.id === targetId);

            if (index === currentIndex) {
                // Panel war bereits offen → also schließen
                wrapper.style.transform = 'translateX(0%)';
                wrapper.parentElement.style.height = '0';
                resetButtons();
                currentIndex = null;
            } else {
                // Neues Panel → anzeigen
                wrapper.style.transform = `translateX(-${index * 100}%)`;
                resetButtons();
                btn.classList.add('active-button');
                // Höhe anpassen (optional dynamisch, hier feste Höhe z. B. 150px)
                wrapper.parentElement.style.height = '48px';

                currentIndex = index;
            }
        });
    });

    // Initiale Höhe ist 0 (alles zu)
    wrapper.parentElement.style.height = '0';
});
