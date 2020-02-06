const insureApp = (function() {
    return {
        toggleMenu: function(navMenuButton) {
            const headerHamburger = document.querySelector('.header__hamburger-img');
            const headerNav = document.querySelector('.header__nav');
            const headerItems = document.querySelector('.header__items');
            if (headerNav.classList.contains('open')) {
                closeMenu();
            } else {
                openMenu();
            }

            function closeMenu() {
                headerHamburger.src = '/images/icon-hamburger.svg';
                headerNav.classList.remove('open');
                headerNav.setAttribute('aria-modal', true);
                document.body.classList.remove('mobile-nav-open');
                navMenuButton.setAttribute('aria-expanded', false);
                navMenuButton.focus();
            }

            function openMenu() {
                headerHamburger.src = '/images/icon-close.svg';
                headerNav.classList.add('open');
                document.body.classList.add('mobile-nav-open');
                navMenuButton.setAttribute('aria-expanded', true);
                headerItems.firstElementChild.firstElementChild.focus();
                document.addEventListener('keyup', listenToMenuKeyStroke, event);
            }

            function listenToMenuKeyStroke($event) {
                if ($event.keyCode === 27) {
                    closeMenu();
                    document.removeEventListener('keyup', listenToMenuKeyStroke);
                }
            }
        }
    }
})();