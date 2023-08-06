const voltarTopo = document.getElementById('voltarTopo');
const socialMedia = document.getElementById('socialMedia')

const scrollButton = 500;
const scrollMedia = 3000;

const verificarScrollButton = () => {
    if (window.pageYOffset > scrollButton) {
        voltarTopo.style.display = 'block';
    } else {
        voltarTopo.style.display = 'none';
    }
}

const voltarAoTopo = () => {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -50);
        setTimeout(voltarAoTopo, 5);
    }
}

const verificarScrollMedia = () => {
    if (window.pageYOffset > scrollMedia) {
        socialMedia.style.display = 'none';
    } else {
        socialMedia.style.display = 'flex';
    }
}

window.addEventListener('scroll', verificarScrollButton);
window.addEventListener('scroll', verificarScrollMedia);
voltarTopo.addEventListener('click', voltarAoTopo);


