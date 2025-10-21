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