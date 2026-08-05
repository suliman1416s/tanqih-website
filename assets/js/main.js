/* ============ شركة تنقيح — السكربت الرئيسي ============ */

// ---- بيانات الخدمات ----
const ICONS = {
  gavel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 13l7 7"/><path d="M9 4l7 7"/><path d="M6.5 6.5l4-4 7 7-4 4z" /><path d="M3 21h8"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z"/><path d="M8.5 11h.01M12 11h.01M15.5 11h.01"/></svg>',
  contract: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z"/><path d="M14 2v5h5"/><path d="M9 13h6M9 17h4"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 21v-4h6v4"/><path d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01"/></svg>',
  scale: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M8 21h8"/><path d="M5 7l14-2"/><path d="M5 7l-2.5 6a3 3 0 0 0 5 0z"/><path d="M19 5l-2.5 6a3 3 0 0 0 5 0z"/></svg>',
  people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7"/><path d="M17.5 14.5a6.5 6.5 0 0 1 4 5.5"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>',
  coins: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6"/><path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6"/></svg>',
  handshake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l4-4 5 2 5-2 4 4-2 2 .5 5.5L14 19l-2-2-2 2-4.5-2.5L6 11z"/><path d="M11 7L7.5 10.5a1.4 1.4 0 0 0 2 2L12 10l2.5 2.5"/></svg>',
  mosque: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c0 2-3 3-3 6h6c0-3-3-4-3-6z"/><path d="M4 21V11h16v10"/><path d="M4 11c0-1.5 1.5-2 2-2h12c.5 0 2 .5 2 2"/><path d="M10 21v-4a2 2 0 1 1 4 0v4"/></svg>',
  tree: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M12 7.5V12M12 12l-5.5 4M12 12l5.5 4"/></svg>',
  bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 1 3.5 10.9c-.8.6-1.5 1.6-1.5 2.6v.5h-4v-.5c0-1-.7-2-1.5-2.6A6 6 0 0 1 12 3z"/></svg>',
  gov: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M4 18h16V10H4z"/><path d="M2 10h20L12 3z"/><path d="M8 14h.01M12 14h.01M16 14h.01"/></svg>',
};

const SERVICES = [
  { icon: "gavel",     title: "الترافع والتقاضي",              desc: "تمثيل قانوني كامل والترافع أمام كافة المحاكم ولجان الفصل في المنازعات." },
  { icon: "chat",      title: "الاستشارات القانونية",           desc: "استشارات دقيقة مكتوبة وشفهية تُبنى على دراسة وافية لموضوعك." },
  { icon: "contract",  title: "صياغة ومراجعة العقود",           desc: "صياغة العقود واللوائح والاتفاقيات ومراجعتها بدقة تحفظ حقوقك." },
  { icon: "building",  title: "تأسيس الشركات والحوكمة",         desc: "تأسيس الشركات وإعداد عقودها ولوائح حوكمتها بما يوافق نظام الشركات." },
  { icon: "scale",     title: "القضايا التجارية",               desc: "معالجة المنازعات التجارية بين الشركاء والشركات والموردين." },
  { icon: "people",    title: "القضايا العمالية",               desc: "تمثيل أصحاب العمل والموظفين أمام المحاكم العمالية وهيئات التسوية." },
  { icon: "home",      title: "القضايا العقارية",               desc: "منازعات الملكية والإيجار والتطوير العقاري وعقود المقاولات." },
  { icon: "coins",     title: "التنفيذ وتحصيل الديون",          desc: "تنفيذ الأحكام والسندات التنفيذية وتحصيل المديونيات بكفاءة." },
  { icon: "handshake", title: "التحكيم وتسوية المنازعات",       desc: "التحكيم والوساطة وتسوية النزاعات وديًا بما يحفظ العلاقات والمصالح." },
  { icon: "mosque",    title: "الأوقاف",                        desc: "تأسيس الأوقاف وصياغة صكوكها ولوائحها النظامية وحوكمة نظاراتها." },
  { icon: "tree",      title: "تصفية التركات والوصايا",         desc: "قسمة التركات وتوثيق الوصايا وإنهاء إجراءاتها بين الورثة." },
  { icon: "bulb",      title: "الملكية الفكرية",                desc: "تسجيل العلامات التجارية وحمايتها والتصدي للتعدي عليها." },
  { icon: "gov",       title: "العقود الحكومية والمنافسات",     desc: "الدعم القانوني في المنافسات والمشتريات الحكومية ومنازعاتها." },
];

// ---- بناء بطاقات الخدمات ----
const grid = document.getElementById("servicesGrid");
const serviceSelect = document.getElementById("fService");
SERVICES.forEach((s) => {
  const card = document.createElement("article");
  card.className = "service-card reveal";
  card.innerHTML = `<div class="sc-icon">${ICONS[s.icon]}</div><h3>${s.title}</h3><p>${s.desc}</p>`;
  grid.appendChild(card);
  const opt = document.createElement("option");
  opt.value = s.title;
  opt.textContent = s.title;
  serviceSelect.appendChild(opt);
});
const otherOpt = document.createElement("option");
otherOpt.value = "أخرى";
otherOpt.textContent = "أخرى / غير متأكد";
serviceSelect.appendChild(otherOpt);

// ---- نموذج الاستشارة → واتساب ----
const WHATSAPP = "966566877335";
document.getElementById("consultForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("fName");
  const phone = document.getElementById("fPhone");
  const service = serviceSelect.value;
  const msg = document.getElementById("fMsg").value.trim();

  let ok = true;
  [name, phone].forEach((f) => {
    f.classList.toggle("invalid", !f.value.trim());
    if (!f.value.trim()) ok = false;
  });
  if (!ok) return;

  const lines = [
    "السلام عليكم، أرغب بطلب استشارة قانونية:",
    `الاسم: ${name.value.trim()}`,
    `الجوال: ${phone.value.trim()}`,
  ];
  if (service) lines.push(`نوع الخدمة: ${service}`);
  if (msg) lines.push(`الموضوع: ${msg}`);
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
});

// ---- القائمة في الجوال ----
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
navToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});
mainNav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

// ---- ظل الترويسة عند التمرير ----
const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
}, { passive: true });

// ---- تمييز الرابط النشط ----
const sections = ["about", "services", "process", "faq", "contact"].map((id) => document.getElementById(id));
const navLinks = document.querySelectorAll(".nav-link");
const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) {
      navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${en.target.id}`));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
sections.forEach((s) => s && spy.observe(s));

// ---- حركة الظهور ----
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) {
      en.target.classList.add("visible");
      revealObs.unobserve(en.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

// ---- السنة في التذييل ----
document.getElementById("year").textContent = new Date().getFullYear();
