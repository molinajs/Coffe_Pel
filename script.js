// Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Função para Abrir Modal
function openModal(id) {
  document.getElementById(id).classList.remove('hidden');
}

// Função para Fechar Modal
function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

// Função para Alternar as Abas do Cardápio (ADICIONADA AQUI)
function openTab(tabName) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.add('hidden'));

  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => {
    btn.className = "tab-btn px-5 py-2.5 rounded-full font-bold text-sm bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-all";
  });

  document.getElementById(tabName).classList.remove('hidden');

  const activeBtn = document.getElementById('btn-' + tabName);
  activeBtn.className = "tab-btn active-tab px-5 py-2.5 rounded-full font-bold text-sm bg-yellow-400 text-black transition-all shadow-md shadow-yellow-500/20";
}


/* Controle do menu hambúrguer somente no celular */
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('mobile-menu-open');
    mobileMenuButton.setAttribute('aria-expanded', String(isOpen));
    mobileMenuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  mobileMenu.querySelectorAll('a, button').forEach(item => {
    item.addEventListener('click', function () {
      mobileMenu.classList.remove('mobile-menu-open');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      mobileMenuButton.setAttribute('aria-label', 'Abrir menu');
    });
  });
}
