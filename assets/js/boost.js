document.addEventListener('DOMContentLoaded', () => {
    const beneficiosData = {
        booster: {
            nombre: "Booster",
            requisitos: "1 Boost",
            beneficios: [
                "Rank @@Booster",
                "1 kit",
                "10 Keys",
                "1 millón de dinero",
                "Rank en Discord"
            ]
        },
        'booster-plus': {
            nombre: "Booster",
            requisitos: "2 Boost",
            beneficios: [
                "Rank @@Booster",
                "1 kit",
                "10 Keys",
                "1 millón de dinero",
                "Rank en Discord"
            ]
        },
        'booster-max': {
            nombre: "Plus Boost",
            requisitos: "4 Boost",
            beneficios: [
                "Rank Plus Boost",
                "6 keys legendarias",
                "15 key op",
                "4 millones de dinero",
                "Rank Plus Boost en DC"
            ]
        }
    };

    function abrirModal(rango) {
        const data = beneficiosData[rango];
        if (!data) return;

        const modal = document.createElement('div');
        modal.className = 'modal-beneficios';
        
        const contenido = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Beneficios ${data.nombre}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="requisito-item">
                        <i class="fab fa-discord"></i>
                        <span>Requisito: ${data.requisitos}</span>
                    </div>
                    <div class="beneficios-lista">
                        ${data.beneficios.map(beneficio => `
                            <div class="beneficio-item">
                                <i class="fas fa-check-circle"></i>
                                <span>${beneficio}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        modal.innerHTML = contenido;
        document.body.appendChild(modal);
        
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

    document.querySelectorAll('.btn-beneficios').forEach(btn => {
        btn.addEventListener('click', () => {
            const rango = btn.closest('.rango-card').dataset.rango;
            abrirModal(rango);
        });
    });
}); 