
window.onscroll = function () {
    if (this.scrollY >= 1000) {
        document.querySelector('#navbar-main').classList.add('animatedBGTTB');
    } else {
        document.querySelector('#navbar-main').classList.remove( 'animatedBGTTB');
    }
}