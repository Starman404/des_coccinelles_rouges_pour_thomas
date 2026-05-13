/* =============================================
   ICÔNES SVG (style Flowbite outline)
   ============================================= */
const PH_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
  <rect x="3" y="3" width="18" height="18" rx="3"/>
  <circle cx="8.5" cy="8.5" r="1.5"/>
  <path d="M21 15l-5-5L5 21"/>
</svg>`;

const USER_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
  <circle cx="12" cy="8" r="4"/>
  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
</svg>`;

const ARROW_SVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12h14M12 5l7 7-7 7"/>
</svg>`;

const HEART_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
</svg>`;

const SEND_SVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="22" y1="2" x2="11" y2="13"/>
  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
</svg>`;

/* Icônes pour les 4 actions de la home */
const ACTION_ICONS = [
  /* Smiley — ateliers */
  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
    <line x1="9" y1="9" x2="9.01" y2="9"/>
    <line x1="15" y1="9" x2="15.01" y2="9"/>
  </svg>`,
  /* Étoile — événements solidaires */
  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>`,
  /* Groupe — accompagnement */
  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>`,
  /* Cadeau */
  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="20 12 20 22 4 22 4 12"/>
    <rect x="2" y="7" width="20" height="5"/>
    <path d="M12 22V7"/>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
  </svg>`
];

/* Icônes pour les 6 valeurs */
const VALUE_ICONS = [
  /* Cœur — bienveillance */
  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>`,
  /* Smiley — joie */
  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
    <line x1="9" y1="9" x2="9.01" y2="9"/>
    <line x1="15" y1="9" x2="15.01" y2="9"/>
  </svg>`,
  /* Groupe — solidarité */
  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>`,
  /* Crayon — créativité */
  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 20h9"/>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>`,
  /* Bouclier — intégrité */
  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>`,
  /* Tendance — engagement */
  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>`
];

/* Icônes contact */
const ICON_PIN = `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
  <circle cx="12" cy="9" r="2.5"/>
</svg>`;
const ICON_MAIL = `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
  <polyline points="22,6 12,13 2,6"/>
</svg>`;
const ICON_PHONE = `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.93 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.82 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17.18v-.26z"/>
</svg>`;
const ICON_CLOCK = `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <polyline points="12 6 12 12 16 14"/>
</svg>`;

/* Réseaux sociaux */
const SOC = {
  facebook:  {
    cls: 'fb', color: '#1877f2', bg: '#e8f0fe', label: 'Facebook',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="#1877f2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`
  },
  instagram: {
    cls: 'ig', color: '#e1306c', bg: '#fef0f5', label: 'Instagram',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="#e1306c"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`
  },
  tiktok:    {
    cls: 'tt', color: '#090909', bg: '#f0f0f0', label: 'TikTok',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="#090909"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.77 1.52V6.75a4.85 4.85 0 01-1-.06z"/></svg>`
  },
  youtube:   {
    cls: 'yt', color: '#ff0000', bg: '#fff0f0', label: 'YouTube',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="#ff0000"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>`
  }
};

/* =============================================
   HELPERS
   ============================================= */
function setImg(el, src, alt, label, extraStyle = '') {
  if (!el) return;
  if (src) {
    el.innerHTML = `<img src="${src}" alt="${alt}" style="width:100%;height:100%;object-fit:cover;">`;
  } else {
    el.innerHTML = `<div class="img-ph" style="width:100%;height:100%;${extraStyle}">${PH_SVG}<span>${label}</span></div>`;
  }
}

function socIconBtns(reseaux) {
  return Object.keys(reseaux).map(k => {
    const s = SOC[k]; if (!s) return '';
    return `<a href="${reseaux[k]}" target="_blank" class="soc-btn ${s.cls}" title="${s.label}" aria-label="${s.label}">${s.svg}</a>`;
  }).join('');
}

function socCards(reseaux) {
  return Object.keys(reseaux).map(k => {
    const s = SOC[k]; if (!s) return '';
    let handle = reseaux[k];
    try {
      const url = new URL(reseaux[k]);
      const seg = url.pathname.replace(/\/$/, '').split('/').pop();
      handle = seg ? '@' + seg : reseaux[k];
    } catch (e) { handle = reseaux[k]; }
    return `<div class="soc-card ${s.cls}" onclick="window.open('${reseaux[k]}','_blank')" role="link" aria-label="${s.label}">
      <div class="s-ico" style="background:${s.bg}">${s.svg}</div>
      <h4>${s.label}</h4>
      <p>${handle}</p>
    </div>`;
  }).join('');
}

/* =============================================
   RENDU DEPUIS LE JSON
   ============================================= */
async function boot() {
  let C;
  try {
    const res = await fetch('config.json');
    if (!res.ok) throw new Error('fetch failed');
    C = await res.json();
  } catch(e) {
    console.warn('config.json introuvable ou invalide — affichage par défaut.', e);
    return;
  }
  const A = C.asso, R = C.reseaux, Ac = C.accueil, H = C.histoire, Q = C.qui;

  /* ---- Logo nav ---- */
  if (A.logo) {
    const el = document.getElementById('nav-logo');
    if (el) {
      el.style.cssText = 'width:46px;height:46px;flex-shrink:0;overflow:hidden;border-radius:50%;background:none;border:none;';
      el.innerHTML = `<img src="${A.logo}" alt="Logo ${A.nom}" style="width:100%;height:100%;object-fit:contain;display:block;">`;
    }
  }

  /* ---- Logo footer (logoFooter si défini, sinon logo) ---- */
  const footerLogoSrc = A.logoFooter || A.logo;
  if (footerLogoSrc) {
    const el = document.getElementById('ft-logo');
    if (el) {
      el.style.cssText = 'width:46px;height:46px;flex-shrink:0;overflow:hidden;border-radius:50%;background:none;border:none;';
      el.innerHTML = `<img src="${footerLogoSrc}" alt="Logo ${A.nom}" style="width:100%;height:100%;object-fit:contain;display:block;">`;
    }
  }

  /* ---- Nom dans la nav ---- */
  const parts = A.nom.split(' ');
  const cut   = typeof A.nomCoupure === 'number' ? A.nomCoupure : 1;
  const first = parts.slice(0, cut).join(' ');
  const rest  = parts.slice(cut).join(' ');
  const navName = document.getElementById('nav-name');
  if (navName) navName.innerHTML = `${first} <span>${rest}</span>`;

  /* ---- ACCUEIL ---- */
  document.getElementById('h-titre').innerHTML   = `${Ac.heroTitre}<em>${Ac.heroSuite}</em>`;
  document.getElementById('h-texte').textContent = Ac.heroTexte;

  /* FIX : image hero sans crash */
  if (Ac.heroImage) {
    const box = document.getElementById('hero-img-box');
    if (box) {
      box.innerHTML = `<img src="${Ac.heroImage}" alt="Photo de l'association Des Coccinelles Rouges Pour Thomas" style="width:100%;height:100%;object-fit:cover;border-radius:16px;">`;
    }
  }

  document.getElementById('don-t').textContent  = Ac.donTitre;
  document.getElementById('don-p').textContent  = Ac.donTexte;

  const haUrl = Ac.helloassoUrl || '#';
  ['nav-cta-don', 'mob-cta-don', 'hero-don-btn', 'histoire-don-btn'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = haUrl;
  });

  /* ---- Cartes de dons ---- */
  const DON_ICONS = [
    `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6 8 4 12.5 4 15a8 8 0 0 0 16 0c0-2.5-2-7-8-13z"/></svg>`,
    `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  ];
  const ARROW = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
  const EXT   = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

  const donsGrid = document.getElementById('dons-grid');
  if (donsGrid && Ac.dons) {
    donsGrid.innerHTML = Ac.dons.map((d, i) => {
      let btn = '';
      if (d.btnType === 'helloasso') {
        btn = `<a href="${haUrl}" target="_blank" class="don-card-btn don-card-btn--blood">${d.btnTexte} ${EXT}</a>`;
      } else if (d.btnType === 'url') {
        btn = `<a href="${d.btnUrl}" target="_blank" class="don-card-btn don-card-btn--blood">${d.btnTexte} ${EXT}</a>`;
      } else if (d.btnType === 'contact') {
        btn = `<a onclick="go('contact')" class="don-card-btn don-card-btn--blood" style="cursor:pointer;">${d.btnTexte} ${ARROW}</a>`;
      }
      return `<div class="don-card don-card--red">
        <div class="don-card-icon">${DON_ICONS[i % DON_ICONS.length]}</div>
        <h3>${d.titre}</h3>
        <p>${d.texte}</p>
        ${btn}
      </div>`;
    }).join('');
  }

  document.getElementById('abt-t').textContent  = Ac.histoireTitre;
  document.getElementById('abt-p1').textContent = Ac.histoireTexte1;
  document.getElementById('abt-p2').textContent = Ac.histoireTexte2;
  setImg(document.getElementById('abt-portrait'), Ac.histoireImgPortrait, 'L\'association Des Coccinelles Rouges Pour Thomas', 'Photo portrait<br><small>(400×530px)</small>');
  setImg(document.getElementById('abt-carre'),    Ac.histoireImgCarre,    'L\'association Des Coccinelles Rouges Pour Thomas', 'Carré', 'border-radius:6px;');

  document.getElementById('qui-t').textContent = Ac.quiTitre;
  document.getElementById('qui-p').textContent = Ac.quiTexte;
  document.getElementById('actions-grid').innerHTML = Ac.actions.map((a, i) =>
    `<div class="qui-card">
      <div class="c-icon">${ACTION_ICONS[i % ACTION_ICONS.length]}</div>
      <h4>${a.titre}</h4>
      <p>${a.texte}</p>
    </div>`).join('');

  document.getElementById('soc-home').innerHTML = socIconBtns(R);

  /* ---- HISTOIRE ---- */
  document.getElementById('st-intro').textContent = H.intro;
  document.getElementById('st-t1').textContent    = H.texte1;
  document.getElementById('st-t2').textContent    = H.texte2;
  document.getElementById('st-naiss').textContent = H.naissanceTitre;
  document.getElementById('st-t3').textContent    = H.texte3;
  document.getElementById('st-t4').textContent    = H.texte4;
  setImg(document.getElementById('st-img1'), H.image1, 'Thomas, son combat et son sourire', 'Photo Thomas / moment clé<br><small>(800×450px)</small>', 'border-radius:14px;');
  setImg(document.getElementById('st-img2'), H.image2, 'Naissance de l\'association Des Coccinelles Rouges Pour Thomas', 'Fondation / équipe<br><small>(800×450px)</small>', 'border-radius:14px;');

  /* ---- QUI SOMMES-NOUS ---- */
  document.getElementById('q-intro').textContent = Q.intro;
  document.getElementById('q-t2').textContent    = Q.texte2;

  document.getElementById('val-grid').innerHTML = Q.valeurs.map((v, i) =>
    `<div class="value-card">
      <div class="v-icon${v.gold ? ' gold' : ''}">${VALUE_ICONS[i] || VALUE_ICONS[0]}</div>
      <h3>${v.titre}</h3>
      <p>${v.texte}</p>
    </div>`).join('');

  document.getElementById('team-grid').innerHTML = Q.equipe.map(m =>
    `<div class="team-card">
      <div class="team-photo">${m.photo
        ? `<img src="${m.photo}" alt="${m.nom}, ${m.role} — Des Coccinelles Rouges Pour Thomas" style="width:100%;height:100%;object-fit:cover;">`
        : `<div class="img-ph" style="width:100%;height:100%;border-radius:0;">${USER_SVG}<span>Photo<br><small>carré</small></span></div>`
      }</div>
      <div class="team-info">
        <h3>${m.nom}</h3>
        <span class="team-role">${m.role}</span>
        <p>${m.bio}</p>
      </div>
    </div>`).join('');

  /* ---- PARRAINS ---- */
  const parrGrid = document.getElementById('parrains-grid');
  if (parrGrid && Q.parrains && Q.parrains.length) {
    parrGrid.innerHTML = Q.parrains.map(p =>
      `<div class="team-card">
        <div class="team-photo">${p.photo
          ? `<img src="${p.photo}" alt="${p.nom}${p.description ? ', ' + p.description : ''} — parrain Des Coccinelles Rouges Pour Thomas" style="width:100%;height:100%;object-fit:cover;">`
          : `<div class="img-ph" style="width:100%;height:100%;border-radius:0;">${USER_SVG}<span>Photo<br><small>carré</small></span></div>`
        }</div>
        <div class="team-info">
          <h3>${p.nom}</h3>
          <p>${p.description}</p>
        </div>
      </div>`).join('');
  }

  /* ---- CONTACT ---- */
  document.getElementById('ct-intro').textContent = C.contact.intro;
  document.getElementById('ct-adr').innerHTML     = A.adresse.replace('\n', '<br>');
  const em = document.getElementById('ct-email'); em.textContent = A.email; em.href = `mailto:${A.email}`;

  const PHONE_SVG = `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.93 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.82 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17.18v-.26z"/></svg>`;
  const tels = Array.isArray(A.tel) ? A.tel : [{ nom: '', numero: A.tel }];
  document.getElementById('ct-tels').innerHTML = tels.map(t => `
    <div class="c-item">
      <div class="c-icon">${PHONE_SVG}</div>
      <div>
        <h4>${t.nom ? t.nom : 'Téléphone'}</h4>
        <a href="tel:${t.numero.replace(/\s/g,'')}">${t.numero}</a>
      </div>
    </div>`).join('');

  document.getElementById('ct-sujets').innerHTML =
    `<option value="">Choisissez un sujet…</option>` +
    C.contact.sujets.map(s => `<option>${s}</option>`).join('');
  document.getElementById('soc-contact').innerHTML = socCards(R);

  /* ---- FOOTER ---- */
  document.getElementById('ft-copy').textContent =
    `© ${new Date().getFullYear()} ${A.nom} — Tous droits réservés`;

  /* Nav active state */
  document.getElementById('n-home').classList.add('active');
}

/* =============================================
   NAVIGATION
   ============================================= */
function go(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  const el = document.getElementById('n-' + name);
  if (el) el.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
  const mob = document.getElementById('mob');
  mob.classList.toggle('open');
  const btn = document.querySelector('.hamburger');
  if (btn) btn.setAttribute('aria-expanded', mob.classList.contains('open'));
}

function goDon() {
  const btn = document.getElementById('helloasso-btn');
  if (btn && btn.href && btn.href !== '#') window.open(btn.href, '_blank');
}

/* =============================================
   LANCEMENT
   ============================================= */
document.addEventListener('DOMContentLoaded', boot);
