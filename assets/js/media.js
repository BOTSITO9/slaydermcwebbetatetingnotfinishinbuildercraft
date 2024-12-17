document.addEventListener('DOMContentLoaded', () => {
    const requisitosData = {
        tiktok: {
            nombre: "TikTok",
            requisitos: [
                "Tener más de 300 seguidores",
                "Hacer un vídeo mostrando el Servidor",
                "Poner en la descripción del vídeo #SlayderMC",
                "Poner la IP, Puerto y Discord en el video",
                "Tener un número de vistas considerable"
            ]
        },
        miniyt: {
            nombre: "Mini YT",
            requisitos: [
                "Tener mínimo 100 suscriptores",
                "Hacer un vídeo mostrando el Servidor"
            ]
        },
        youtuber: {
            nombre: "YouTuber",
            requisitos: [
                "Tener mínimo 500 suscriptores",
                "Hacer un vídeo mostrando el Servidor",
                "Tener un número de vistas considerable"
            ]
        },
        famoso: {
            nombre: "Famoso ✨ 🔥",
            requisitos: [
                "Tener mínimo 3,000 suscriptores",
                "Hacer un vídeo mostrando el Servidor",
                "Tener un número de vistas considerable"
            ]
        }
    };

    function abrirModal(rango) {
        const data = requisitosData[rango];
        if (!data) return;

        const modal = document.createElement('div');
        modal.className = 'modal-requisitos';
        
        const contenido = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Requisitos Rango ${data.nombre}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    ${data.requisitos.map(requisito => `
                        <div class="requisito-item">
                            <i class="fas fa-check-circle"></i>
                            <span>${requisito}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        modal.innerHTML = contenido;
        document.body.appendChild(modal);
        
        // Mostrar modal con animación
        requestAnimationFrame(() => {
            modal.style.opacity = '1';
        });
        
        const cerrarModal = () => {
            modal.style.opacity = '0';
            setTimeout(() => modal.remove(), 300);
        };

        modal.querySelector('.modal-close').addEventListener('click', cerrarModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) cerrarModal();
        });
    }

    // Agregar event listeners a todos los botones de requisitos
    document.querySelectorAll('.btn-requisitos').forEach(btn => {
        btn.addEventListener('click', () => {
            const rango = btn.closest('.rango-card').dataset.rango;
            abrirModal(rango);
        });
    });
}); 