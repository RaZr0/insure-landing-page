const insureApp = (function() {
    // const headerHamburger = document.querySelector('.header__hamburger');
    // const headerNav = document.querySelector('.header__nav');
    // headerHamburger.addEventListener('click', function() {
    //     if (headerNav.classList.contains('open')) {
    //         headerHamburger.src = '/images/icon-hamburger.svg';
    //         headerNav.classList.remove('open');
    //         document.body.classList.remove('mobile-nav-open');
    //     } else {
    //         headerHamburger.src = '/images/icon-close.svg';
    //         headerNav.classList.add('open');
    //         document.body.classList.add('mobile-nav-open');
    //     }
    // });
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
                document.body.classList.remove('mobile-nav-open');
                navMenuButton.focus();
            }

            function openMenu() {
                headerHamburger.src = '/images/icon-close.svg';
                headerNav.classList.add('open');
                document.body.classList.add('mobile-nav-open');
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