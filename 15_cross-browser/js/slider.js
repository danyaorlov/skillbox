document.addEventListener('DOMContentLoaded',function () {
    document.querySelector('.burger-mobile-header').addEventListener('click',function () {
        document.querySelector('.mobile-menu-float').classList.toggle('mobile-menu-active');
        document.querySelector('body').classList.toggle('body-hidden-scroll');
    });
});