// Variables de estado
let currentVote = null;

// Función para cambiar entre secciones
function goToSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });
    // Mostrar la elegida
    document.getElementById(sectionId).classList.add('active');
}

// Lógica del Menú
const menuBtn = document.getElementById('menu-btn');
const menuOverlay = document.getElementById('menu-overlay');

function toggleMenu() {
    menuOverlay.classList.toggle('open');
}

menuBtn.addEventListener('click', toggleMenu);

// Acciones del Menú
function menuAction(action) {
    toggleMenu(); // Cerrar menú primero
    
    setTimeout(() => {
        if (action === 'courses') {
            goToSection('selection');
        } else if (action === 'vote') {
            goToSection('voting');
        } else if (action === 'credits') {
            showModal('HECHO POR', 'Diseño y desarrollo web realizado para el proyecto de 4ºESO.<br>Desarrollado con HTML5, CSS3 y JS Vanilla.');
        }
    }, 300);
}

// Sistema de Votación
function vote(course) {
    currentVote = course;
    showModal('¡VOTO REGISTRADO!', `Has votado por la clase <b>${course}</b>.<br>El corazón ahora recuerda tu elección.`);
    goToSection('selection'); // Volver a la selección tras votar
    
    // Actualizar el corazón (efecto visual)
    const heart = document.getElementById('heart-btn');
    heart.style.fill = "#ff003c"; // Rellenar corazón
    heart.querySelector('svg').style.fill = "#ff003c";
}

// Lógica del Corazón (Ver voto)
document.getElementById('heart-btn').addEventListener('click', () => {
    if (currentVote) {
        showModal('TU VOTO', `Actualmente has votado por: <br><h1 style="color:var(--neon-red)">${currentVote}</h1>`);
    } else {
        showModal('SIN VOTO', 'Aún no has votado por ningún curso. Ve al menú y selecciona "Vota por tu favorito".');
    }
});

// Lógica del Modal (Ventanas emergentes)
const modal = document.getElementById('info-modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');

function showModal(title, text) {
    modalTitle.innerHTML = title;
    modalText.innerHTML = text;
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}