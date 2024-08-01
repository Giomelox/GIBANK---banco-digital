

document.querySelectorAll('.bandeira').forEach(bandeira => {
    bandeira.addEventListener('click', () => {
        // Verifica se a bandeira já está expandida
        const isExpanded = bandeira.classList.contains('expanded');

        // Fecha todas as bandeiras abertas
        document.querySelectorAll('.bandeira').forEach(b => b.classList.remove('expanded'));

        // Se a bandeira não estava expandida, expande-a
        if (!isExpanded) {
            bandeira.classList.add('expanded');
        }
    });
});

//====================================================================================//

document.addEventListener('DOMContentLoaded', () => {
    const sectionPag3 = document.querySelector('.pag3');
    const cartoes = document.querySelectorAll('.cartoes > div');
    const paragrafos = document.querySelectorAll('.paragrafocartoes, .obscartoes');

    cartoes.forEach(cartao => {
        cartao.addEventListener('click', () => {
            // Remove a classe de cor de fundo dos cartões anteriores e oculta os parágrafos
            cartoes.forEach(c => {
                if (c !== cartao) {
                    c.querySelector('.conteúdo').classList.remove('active');
                }
            });

            paragrafos.forEach(paragrafo => {
                if (!paragrafo.classList.contains('hidden')) {
                    paragrafo.classList.add('hidden');
                }
            });

            // Alterna a visibilidade do conteúdo do cartão clicado
            const conteúdo = cartao.querySelector('.conteúdo');
            const isActive = conteúdo.classList.contains('active');

            // Atualiza a cor de fundo da seção
            const cor = cartao.getAttribute('data-color');
            sectionPag3.style.backgroundColor = cor;

            // Mostra ou oculta o conteúdo do cartão clicado
            if (isActive) {
                conteúdo.classList.remove('active');
                paragrafos.forEach(paragrafo => paragrafo.classList.remove('hidden'));
            } else {
                conteúdo.classList.add('active');
            }
        });
    });

    // Adiciona um evento de clique no documento para esconder o conteúdo quando clicar fora
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.cartoes')) {
            document.querySelectorAll('.conteúdo').forEach(conteúdo => {
                conteúdo.classList.remove('active');
            });

            paragrafos.forEach(paragrafo => paragrafo.classList.remove('hidden'));
        }
    });
});

