const openBtn = document.getElementById('open-contact');
const dialog = document.getElementById('contactDialog');
const closeBtn = document.getElementById('closeContact');
const form = document.getElementById('contactForm');

openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (typeof dialog.showModal === 'function') {
        dialog.showModal();
    } else {
        // fallback simples
        alert('Seu navegador não suporta a janela modal. Atualize o navegador.');
    }
});

closeBtn.addEventListener('click', () => dialog.close());

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    // Aqui você pode trocar por fetch() para enviar os dados ao servidor
    console.log('Contato enviado:', data);
    dialog.close();
});

const showAlert = () => {
    alert('Formulário enviado com sucesso!');
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    console.log('Contato enviado:', data);
    showAlert();
    dialog.close();
});



//comentarios adicionais para o diálogo de estatísticas

                    (function(){
                        const openBtn = document.getElementById('openStats');
                        const dialog = document.getElementById('statsDialog');
                        const closeBtn = document.getElementById('closeStats');

                        openBtn && openBtn.addEventListener('click', () => {
                            if (typeof dialog.showModal === 'function') dialog.showModal();
                            else dialog.setAttribute('open', ''); // fallback
                        });

                        closeBtn && closeBtn.addEventListener('click', () => {
                            if (typeof dialog.close === 'function') dialog.close();
                            else dialog.removeAttribute('open');
                        });

                        // fechar ao clicar fora
                        dialog && dialog.addEventListener('click', (e) => {
                            if (e.target === dialog) {
                                if (typeof dialog.close === 'function') dialog.close();
                                else dialog.removeAttribute('open');
                            }
                        });
                    })();