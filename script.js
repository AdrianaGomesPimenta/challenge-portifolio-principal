// Mapeamento de tecnologias por formação
const tecnologias = {
    iesb: ["Banco de Dados", "Front-End", "Redes", "Back-End",],
    alura: ["HTML", "CSS", "JavaScript", "React", "MySQL"],
    senai: ["HTML", "CSS", "JavaScript", "Bootstrap"]
};

// Adicionando tecnologias aos cards
document.querySelectorAll('.formacao__elemento').forEach(card => {
    const id = card.getAttribute('data-id');
    const techList = tecnologias[id];
    const techContainer = card.querySelector('.formacao__tecnologias');

    // Adiciona as tecnologias na área designada
    techList.forEach(tech => {
        const span = document.createElement('span');
        span.textContent = tech;
        span.style.margin = "0 8px";
        techContainer.appendChild(span);
    });
});
