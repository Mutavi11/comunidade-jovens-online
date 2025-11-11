// SCRIPT.JS — Comunidade Jovens com Visão (ONLINE READY)

// Inicializa o EmailJS — substitua pela sua Public Key (veja README)
(function(){
  if (window.emailjs) {
    try { emailjs.init('COLOCA_AQUI_TUA_PUBLIC_KEY'); } catch(e){ console.warn('EmailJS init error', e); }
  } else {
    console.warn('EmailJS library não carregada — verifica conexão CDN.');
  }
})();

// Gera código único no formato JCV-2025-0001
function gerarCodigo(){
  const membros = JSON.parse(localStorage.getItem('membros')) || [];
  const numero = membros.length + 1;
  return 'JCV-2025-' + String(numero).padStart(4,'0');
}

// Cadastro: capta dados, guarda no localStorage, envia email via EmailJS
document.getElementById('cadastroForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const idade = document.getElementById('idade').value.trim();
  const genero = document.getElementById('genero').value;
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const provincia = document.getElementById('provincia').value.trim();
  const ocupacao = document.getElementById('ocupacao').value.trim();
  const area = document.getElementById('area').value;
  const motivacao = document.getElementById('motivacao').value.trim();

  if (!nome || !email) {
    document.getElementById('resultado').textContent = 'Nome e e-mail são obrigatórios.';
    return;
  }

  const codigo = gerarCodigo();
  const membro = { codigo, nome, idade, genero, email, telefone, provincia, ocupacao, area, motivacao, createdAt: new Date().toISOString() };

  // salva localmente
  const membros = JSON.parse(localStorage.getItem('membros')) || [];
  membros.push(membro);
  localStorage.setItem('membros', JSON.stringify(membros));

  // mostra resultado
  document.getElementById('resultado').innerHTML = '<p>✅ Cadastro concluído!</p><p>Seu código: <strong>' + codigo + '</strong></p><p>Enviámos o código para o seu e-mail.</p>';

  // envia email via EmailJS (substitua SERVICE_ID e TEMPLATE_ID conforme README)
  if (window.emailjs && typeof emailjs.send === 'function') {
    emailjs.send('COLOCA_AQUI_TEU_SERVICE_ID', 'COLOCA_AQUI_TEU_TEMPLATE_ID', {
      nome: nome,
      email: email,
      codigo: codigo
    }).then(function(){ console.log('Email enviado.'); })
      .catch(function(err){ console.warn('Falha ao enviar email:', err); });
  } else {
    console.warn('EmailJS não configurado — substitua as chaves em script.js conforme README.');
  }

  document.getElementById('cadastroForm').reset();
});
