document.addEventListener("DOMContentLoaded", function() {

    // Lógica do Header Interativo
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 80) {
            // Scroll Down
            navbar.classList.add('-translate-y-full');
        } else {
            // Scroll Up
            navbar.classList.remove('-translate-y-full');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Lógica do Menu Mobile
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        iconOpen.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
    });

    // Fecha o menu mobile ao clicar em um link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            iconOpen.classList.remove('hidden');
            iconClose.classList.add('hidden');
            menuButton.setAttribute('aria-expanded', 'false');
        });
    });

    // Lógica do Modal de Privacidade
    const modal = document.getElementById('privacy-modal');
    const openButton = document.getElementById('open-privacy-modal');
    const closeButton1 = document.getElementById('close-privacy-modal');
    const closeButton2 = document.getElementById('close-privacy-modal-2');

    const openModal = () => modal.classList.remove('hidden');
    const closeModal = () => modal.classList.add('hidden');

    if (modal && openButton && closeButton1 && closeButton2) {
        openButton.addEventListener('click', openModal);
        closeButton1.addEventListener('click', closeModal);
        closeButton2.addEventListener('click', closeModal);
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

});