document.addEventListener('DOMContentLoaded', () => {
    const beneficiosData = {
        dark: {
            nombre: "Dark",
            precio: "$4 USD",
            proteccion: "11",
            beneficios: {
                "Comandos Básicos": [
                    "/feed - Recupera tu hambre",
                    "/craft - Abre una mesa de crafteo virtual",
                    "/ec - Accede a tu ender chest"
                ],
                "Características": [
                    "1 Home adicional",
                    "2 pets slots",
                    "Prefijo [Dark] en el chat"
                ]
            }
        },
        'dark-plus': {
            nombre: "Dark Plus",
            precio: "$5 USD",
            proteccion: "12",
            beneficios: {
                "Incluye beneficios Dark": [
                    "Todos los beneficios del rango Dark"
                ],
                "Comandos Adicionales": [
                    "/heal - Recupera tu vida (30 min cooldown)",
                    "/fix - Repara tus items"
                ],
                "Características Plus": [
                    "2 Homes adicionales",
                    "3 pets slots",
                    "Prefijo [Dark+] en el chat"
                ]
            }
        },
        'slive': {
            nombre: "Slive",
            precio: "$7 USD",
            proteccion: "13",
            beneficios: {
                "Incluye beneficios Dark+": [
                    "Todos los beneficios del rango Dark Plus"
                ],
                "Comandos Exclusivos": [
                    "/back - Vuelve a tu última ubicación",
                    "/hat - Coloca cualquier bloque en tu cabeza",
                    "/near - Ve jugadores cercanos a ti"
                ],
                "Características Slive": [
                    "3 Homes adicionales",
                    "4 pets slots",
                    "Prefijo [Slive] en el chat",
                    "Acceso a zona VIP",
                    "Multiplicador de experiencia x1.5"
                ]
            }
        },
        'slive-plus': {
            nombre: "Slive Plus",
            precio: "$9 USD",
            proteccion: "14",
            beneficios: {
                "Incluye beneficios Slive": [
                    "Todos los beneficios del rango Slive"
                ],
                "Comandos Premium": [
                    "/fly - Permite volar en zonas permitidas",
                    "/heal - Sin cooldown",
                    "/repair all - Repara todo tu inventario"
                ],
                "Características Slive+": [
                    "5 Homes adicionales",
                    "6 pets slots",
                    "Prefijo [Slive+] en el chat",
                    "Acceso a zona VIP+",
                    "Multiplicador de experiencia x2",
                    "Prioridad en el servidor"
                ]
            }
        },
        'golden-max': {
            nombre: "Golden Max",
            precio: "$12.5 USD",
            proteccion: "15",
            beneficios: {
                "Incluye beneficios Slive+": [
                    "Todos los beneficios del rango Slive Plus"
                ],
                "Comandos Golden": [
                    "/feed sin cooldown",
                    "/enderchest anywhere - Accede a tu enderchest desde cualquier lugar",
                    "/ptime - Controla tu tiempo personal",
                    "/workbench - Abre una mesa de crafteo desde cualquier lugar"
                ],
                "Características Golden Max": [
                    "7 Homes adicionales",
                    "8 pets slots",
                    "Prefijo [GMax] en el chat",
                    "Acceso a zona Golden",
                    "Multiplicador de experiencia x2.5",
                    "Prioridad alta en el servidor",
                    "Kit Golden cada 24 horas",
                    "Acceso a partículas personalizadas"
                ]
            }
        },
        'golden-plus': {
            nombre: "Golden Plus",
            precio: "$15 USD",
            proteccion: "16",
            beneficios: {
                "Incluye beneficios Golden Max": [
                    "Todos los beneficios del rango Golden Max"
                ],
                "Comandos Supremos": [
                    "/nick - Cambia tu nombre en el juego",
                    "/tptoggle - Controla quién puede teletransportarse a ti",
                    "/craft anywhere - Craftea desde cualquier lugar",
                    "/heal others - Cura a otros jugadores"
                ],
                "Características Golden+": [
                    "10 Homes adicionales",
                    "12 pets slots",
                    "Prefijo [G+] en el chat",
                    "Acceso a zona Golden+",
                    "Multiplicador de experiencia x3",
                    "Máxima prioridad en el servidor",
                    "Kit Golden+ cada 12 horas",
                    "Todas las partículas desbloqueadas",
                    "Acceso a cosméticos exclusivos",
                    "Capacidad de crear warps personalizados"
                ]
            }
        },
        'slayder-ff': {
            nombre: "Slayder FF",
            precio: "$17 USD",
            proteccion: "18",
            beneficios: {
                "Incluye beneficios Golden+": [
                    "Todos los beneficios del rango Golden Plus"
                ],
                "Comandos Legendarios": [
                    "/god - Modo invencible temporal",
                    "/vanish - Modo invisible",
                    "/invsee - Ver inventario de otros jugadores",
                    "/speed - Control de velocidad personal",
                    "/time - Control total del tiempo"
                ],
                "Características Slayder FF": [
                    "15 Homes adicionales",
                    "16 pets slots",
                    "Prefijo [SFF] en el chat (personalizable)",
                    "Acceso a zona Slayder",
                    "Multiplicador de experiencia x4",
                    "Prioridad legendaria en el servidor",
                    "Kit Slayder cada 6 horas",
                    "Efectos de partículas personalizados",
                    "Acceso a todos los cosméticos",
                    "Creación ilimitada de warps",
                    "Chat privado con colores",
                    "Capacidad de crear tiendas VIP"
                ]
            }
        },
        'slayder-plus': {
            nombre: "Slayder Plus",
            precio: "$18 USD",
            proteccion: "19",
            beneficios: {
                "Incluye beneficios Slayder FF": [
                    "Todos los beneficios del rango Slayder FF"
                ],
                "Comandos Definitivos": [
                    "/fly anywhere - Vuela en cualquier lugar",
                    "/tp anywhere - Teletransportación sin restricciones",
                    "/gamemode - Cambio de modo de juego (creativo temporal)",
                    "/weather - Control del clima personal",
                    "/enchant - Encantamientos personalizados"
                ],
                "Características Slayder+": [
                    "20 Homes adicionales",
                    "20 pets slots",
                    "Prefijo [S+] en el chat (totalmente personalizable)",
                    "Acceso a zona Slayder Elite",
                    "Multiplicador de experiencia x5",
                    "Máxima prioridad absoluta",
                    "Kit Slayder+ cada 3 horas",
                    "Creador de efectos de partículas",
                    "Creador de cosméticos personalizados",
                    "Sistema de warps avanzado",
                    "Chat VIP con formatos especiales",
                    "Tiendas Premium sin límites",
                    "Acceso anticipado a eventos",
                    "Beneficios exclusivos en eventos"
                ]
            }
        },
        'personalizado': {
            nombre: "Personalizado",
            precio: "$22 USD",
            proteccion: "22",
            beneficios: {
                "Incluye beneficios Slayder+": [
                    "Todos los beneficios del rango Slayder Plus"
                ],
                "Comandos Personalizados": [
                    "/nick color - Nombre con colores y formatos especiales",
                    "/gamemode creativo - Acceso a creativo en zonas permitidas",
                    "/pex - Gestión de permisos personalizados",
                    "/particle master - Control total de efectos de partículas",
                    "/customkit - Crea tus propios kits personalizados"
                ],
                "Características Únicas": [
                    "Homes ilimitados",
                    "30 pets slots",
                    "Prefijo totalmente personalizable con formato y colores",
                    "Acceso a todas las zonas VIP",
                    "Multiplicador de experiencia x7",
                    "Prioridad máxima personalizada",
                    "Kit Personalizado cada hora",
                    "Creador avanzado de partículas y efectos",
                    "Sistema de cosméticos personalizado",
                    "Warps VIP ilimitados",
                    "Chat con formatos y colores personalizados",
                    "Sistema de tienda personal",
                    "Organizador de eventos personal",
                    "Beneficios personalizables",
                    "Acceso a beta tests",
                    "Rol especial en Discord",
                    "Soporte prioritario 24/7",
                    "Capacidad de sugerir nuevas características"
                ]
            }
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
                    <h3>${data.nombre} - Beneficios</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="beneficio-grupo">
                        <h4>Protección</h4>
                        <div class="beneficio-item">
                            <i class="fas fa-shield-alt"></i>
                            <span>Nivel ${data.proteccion}</span>
                        </div>
                    </div>
                    ${Object.entries(data.beneficios).map(([categoria, items]) => `
                        <div class="beneficio-grupo">
                            <h4>${categoria}</h4>
                            ${items.map(item => `
                                <div class="beneficio-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span>${item}</span>
                                </div>
                            `).join('')}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        modal.innerHTML = contenido;
        document.body.appendChild(modal);
        
        // Mostrar modal con animación
        setTimeout(() => modal.style.display = 'flex', 10);
        
        // Cerrar modal
        const cerrarModal = () => {
            modal.style.opacity = '0';
            setTimeout(() => modal.remove(), 300);
        };

        modal.querySelector('.modal-close').addEventListener('click', cerrarModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) cerrarModal();
        });
    }

    // Asignar evento a botones de beneficios
    document.querySelectorAll('.btn-beneficios').forEach(btn => {
        btn.addEventListener('click', () => {
            const rango = btn.closest('.rango-card').dataset.rango;
            abrirModal(rango);
        });
    });
}); 