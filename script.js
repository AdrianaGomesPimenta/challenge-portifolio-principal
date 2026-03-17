document.addEventListener("DOMContentLoaded", () => {

  // Mapeamento de tecnologias por formação
  const tecnologias = {
    iesb: ["Banco de Dados", "Front-End", "Redes", "Back-End"],
    alura: ["HTML", "CSS", "JavaScript", "React", "MySQL"],
    bstqb: ["Casos de Teste", "Funcionais", "Exploratórios"]
  };

  // Adicionando tecnologias aos cards
  document.querySelectorAll('.formacao__elemento').forEach(card => {
    const id = card.getAttribute('data-id');
    const techList = tecnologias[id];
    const techContainer = card.querySelector('.formacao__tecnologias');

    if (techList && techContainer) {
      techList.forEach(tech => {
        const span = document.createElement('span');
        span.textContent = tech;
        span.style.margin = "0 8px";
        techContainer.appendChild(span);
      });
    }
  });

  //  CONTROLE DOS VÍDEOS (QA)
  const videos = document.querySelectorAll('.projeto-video');

  videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
      video.play();
    });

    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });

});