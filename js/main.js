(function() {
    const headerHamburger = document.querySelector('.header__hamburger');
    const headerNav = document.querySelector('.header__nav');
    headerHamburger.addEventListener('click', function() {
        if (headerNav.classList.contains('open')) {
            headerHamburger.src = '/images/icon-hamburger.svg';
            headerNav.classList.remove('open');
            document.body.classList.remove('mobile-nav-open');
        } else {
            headerHamburger.src = '/images/icon-close.svg';
            headerNav.classList.add('open');
            document.body.classList.add('mobile-nav-open');
        }
    });
})();