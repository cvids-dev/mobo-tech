
const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');

menuToggle?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(open));
});

nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded','false');
}));

const cards=[...document.querySelectorAll('.article-card')];
const chips=[...document.querySelectorAll('.filter-chip')];

function filterArticles(value){
  cards.forEach(card=>{
    card.hidden=!(value==='todos'||card.dataset.category===value);
  });
  chips.forEach(chip=>{
    chip.classList.toggle('active',chip.dataset.filter===value);
  });
}

chips.forEach(chip=>chip.addEventListener('click',()=>{
  filterArticles(chip.dataset.filter);
}));

document.querySelectorAll('.category-card[data-filter]').forEach(card=>{
  card.addEventListener('click',()=>{
    filterArticles(card.dataset.filter);
  });
});

const modal=document.querySelector('.search-modal');
const searchInput=document.querySelector('#site-search');
const searchOpen=document.querySelector('.search-open');
const searchClose=document.querySelector('.search-close');
const results=document.querySelector('#search-results');

function openSearch(){
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  setTimeout(()=>searchInput.focus(),30);
}

function closeSearch(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  searchOpen?.focus();
}

searchOpen?.addEventListener('click',openSearch);
searchClose?.addEventListener('click',closeSearch);

modal?.addEventListener('click',e=>{
  if(e.target===modal)closeSearch();
});

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&modal.classList.contains('open'))closeSearch();
});

searchInput?.addEventListener('input',()=>{
  const q=searchInput.value.trim().toLocaleLowerCase('pt-BR');
  results.innerHTML='';
  if(!q)return;

  const found=cards.filter(card=>
    card.innerText.toLocaleLowerCase('pt-BR').includes(q)
  );

  found.forEach(card=>{
    const a=document.createElement('a');
    a.className='search-result';
    a.href='#artigos';

    const category=card.querySelector('.article-meta span')?.textContent||'ARTIGO';
    const title=card.querySelector('h3')?.textContent||'';
    const span=document.createElement('span');

    span.textContent=category;
    a.append(span,document.createTextNode(title));
    a.addEventListener('click',closeSearch);
    results.append(a);
  });

  if(!found.length){
    const p=document.createElement('p');
    p.className='search-result';
    p.textContent='Nenhum conteúdo encontrado. Tente outro termo.';
    results.append(p);
  }
});

document.querySelector('#newsletter-form')?.addEventListener('submit',e=>{
  e.preventDefault();
  document.querySelector('#form-message').textContent=
    'A lista de e-mails ainda não está conectada. Voltaremos com essa função na próxima etapa.';
});
