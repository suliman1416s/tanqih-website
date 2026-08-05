/* ============ شركة تنقيح — السكربت الرئيسي ============ */

// ---- نموذج الاستشارة → واتساب ----
const WHATSAPP = document.body.dataset.whatsapp || "966566877335";
const serviceSelect = document.getElementById("fService");
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
