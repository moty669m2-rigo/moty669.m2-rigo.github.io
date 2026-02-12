function cambiarPantalla(numero) {
    // Ocultar todas las secciones
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    // Mostrar la elegida
    document.getElementById('pantalla' + numero).classList.add('active');

    if(numero === 6) {
        crearLluviaCorazones();
    }
}

const btnNo = document.getElementById('btnNo');

btnNo.addEventListener('mouseover', () => {
    // Mover botón a posición aleatoria
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;

    // Crear efecto de "humo" de corazones
    for(let i=0; i<5; i++) {
        const heart = document.createElement('span');
        heart.innerHTML = '❤️';
        heart.className = 'heart-smoke';
        heart.style.left = `${btnNo.offsetLeft + 20}px`;
        heart.style.top = `${btnNo.offsetTop}px`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    }
});

function crearLluviaCorazones() {
    const cont = document.getElementById('corazonesCont');
    for(let i=0; i<50; i++) {
        const h = document.createElement('div');
        h.innerHTML = '❤️';
        h.style.position = 'absolute';
        h.style.left = Math.random() * 100 + 'vw';
        h.style.top = Math.random() * 100 + 'vh';
        h.style.fontSize = (Math.random() * 20 + 10) + 'px';
        h.style.animation = `fadeIn ${Math.random() * 2 + 1}s infinite`;
        cont.appendChild(h);
    }
}