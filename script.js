// Aguarda o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona todos os elementos que são clicáveis (os cartões)
    const cards = document.querySelectorAll('.card');
    
    // Seleciona o parágrafo onde o nome do objeto será exibido
    const displayText = document.getElementById('display-text');

    // Para cada cartão encontrado, adiciona um "ouvinte" de clique
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Quando um cartão é clicado, executa esta função:

            // 1. Pega o nome do objeto do atributo 'data-name' do HTML
            const name = card.getAttribute('data-name');
            
            // 2. Pega o caminho do arquivo de áudio do atributo 'data-audio'
            const audioSrc = card.getAttribute('data-audio');

            // 3. Atualiza o texto na área de exibição com o nome do objeto
            displayText.textContent = name;

            // 4. Cria um novo objeto de áudio com o caminho do arquivo
            const audio = new Audio(audioSrc);
            
            // 5. Toca o áudio
            audio.play();
        });
    });
});