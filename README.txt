COMUNIDADE JOVENS COM VISÃO — Pacote pronto para GitHub Pages
=============================================================

Conteúdo do pacote:
- index.html   -> formulário de cadastro (frontend)
- login.html   -> login simples do administrador (senha local: JCV2025admin)
- admin.html   -> painel administrativo (visualizar/exportar membros)
- style.css    -> estilos
- script.js    -> lógica: geração de código, armazenamento local e EmailJS

Como configurar EmailJS (para envio de e-mails):
1. Acede a https://www.emailjs.com e cria uma conta gratuita.
2. Adiciona um serviço de e-mail (ex.: Gmail) seguindo as instruções do EmailJS.
3. Cria um template de e-mail. No template, usa variáveis: {{nome}}, {{email}}, {{codigo}}.
4. Copia as tuas chaves:
   - Public Key  (pública) — usada em emailjs.init('PUBLIC_KEY')
   - Service ID  — usado em emailjs.send('SERVICE_ID', 'TEMPLATE_ID', {...})
   - Template ID — usado em emailjs.send(...)

5. Abre o ficheiro script.js e substitui:
   - COLOCA_AQUI_TUA_PUBLIC_KEY
   - COLOCA_AQUI_TEU_SERVICE_ID
   - COLOCA_AQUI_TEU_TEMPLATE_ID

Publicar no GitHub Pages:
1. Cria um repositório no GitHub (ex.: comunidade-jovens-online).
2. Faz upload dos ficheiros contidos neste pacote.
3. No repositório, vai a "Settings" -> "Pages" -> Source: select branch 'main' and folder '/root'.
4. Guarda. Após alguns minutos, o site estará disponível em:
   https://SEU_USUARIO.github.io/REPOSITORIO/

Notas importantes:
- Os dados são armazenados no localStorage do navegador. Para backup centralizado recomenda-se migrar para um backend (Firebase, Supabase, etc.).
- A proteção do painel é simples (senha local em login.html). Para produção, use autenticação por servidor.
- EmailJS requer HTTPS — GitHub Pages fornece HTTPS automaticamente.
- Exporta regularmente os ficheiros JSON/CSV pelo painel administrativo.

Suporte:
Se quiseres, posso:
- Gerar um ficheiro ZIP pronto para download (já criado).
- Ajudar a subir o repositório no GitHub passo-a-passo.
- Integrar um backend (Node.js/Express) para armazenamento centralizado e envio de e-mails via SMTP.
