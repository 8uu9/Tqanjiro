/* ============================================================
   Tanjiro - Ahmed | Portfolio
   Pure HTML / CSS / JS — translations + interactivity
   ============================================================ */

const translations = {
  ar: {
    pageTitle: "تانجيرو - احمد | Tanjiro Portfolio",
    topBadge: "مؤسس مجتمع هوليود",
    nameFirst: "تانجيرو",
    nameLast: "احمد",
    nameFull: "تانجيرو - احمد",
    headlineLead: "أصنع مجتمعات",
    headlineAccent: "تجمع الناس على شاشة واحدة",
    subtitle: "ثمان سنوات من بناء التجارب الرقمية على ديسكورد. أحوّل الفكرة إلى مجتمع نابض بالحياة.",
    stat1Value: "+50K", stat1Label: "عضو",
    stat2Value: "+8",   stat2Label: "سنوات",
    stat3Value: "24/7", stat3Label: "نشاط",
    aboutBtn: "تعرف عليّ",
    joinBtn: "انضم لسيرفر هوليود",
    badgeHollywood: "هوليود",
    badgeCommunity: "مجتمع",

    aboutTitle: "البطاقة التعريفية",
    nationalityTitle: "الجنسية",  nationalityValue: "عراقي",
    locationTitle: "الإقامة",     locationValue: "تركيا",
    ageTitle: "العمر",            ageValue: "20 عاماً",

    visionStart: "رؤية تتجاوز مجرد",
    visionHighlight: "إدارة السيرفرات",
    visionDesc: "الهدف لم يكن يوماً مجرد جمع الأرقام، بل صناعة مجتمع حقيقي يجمع أصحاب الشغف، ويوفر بيئة للترفيه الراقي والتواصل الهادف.",
    visionPoint1: "بيئة آمنة ومنظمة باحترافية",
    visionPoint2: "فعاليات مستمرة ونشاط دائم",
    visionPoint3: "دعم المواهب وتكريم المتميزين",

    footerRights: "جميع الحقوق محفوظة"
  },

  en: {
    pageTitle: "Tanjiro - Ahmed | Portfolio",
    topBadge: "Founder of Hollywood Community",
    nameFirst: "Tanjiro",
    nameLast: "Ahmed",
    nameFull: "Tanjiro - Ahmed",
    headlineLead: "Building communities",
    headlineAccent: "that bring people together on one screen",
    subtitle: "Eight years of crafting digital experiences on Discord. I turn an idea into a living, breathing community.",
    stat1Value: "50K+", stat1Label: "Members",
    stat2Value: "8+",   stat2Label: "Years",
    stat3Value: "24/7", stat3Label: "Active",
    aboutBtn: "About Me",
    joinBtn: "Join the Hollywood Server",
    badgeHollywood: "Hollywood",
    badgeCommunity: "Community",

    aboutTitle: "Profile Card",
    nationalityTitle: "Nationality", nationalityValue: "Iraqi",
    locationTitle: "Based in",       locationValue: "Turkey",
    ageTitle: "Age",                 ageValue: "20 years old",

    visionStart: "A vision beyond just",
    visionHighlight: "managing servers",
    visionDesc: "The goal was never just to gather numbers, but to build a real community that brings together passionate people and offers an environment for refined entertainment and meaningful conversations.",
    visionPoint1: "A safe and professionally organized environment",
    visionPoint2: "Continuous events and constant activity",
    visionPoint3: "Supporting talent and honoring the outstanding",

    footerRights: "All rights reserved"
  },

  tr: {
    pageTitle: "Tanjiro - Ahmed | Portföy",
    topBadge: "Hollywood Topluluğunun Kurucusu",
    nameFirst: "Tanjiro",
    nameLast: "Ahmed",
    nameFull: "Tanjiro - Ahmed",
    headlineLead: "Topluluklar inşa ediyorum",
    headlineAccent: "insanları tek bir ekranda buluşturan",
    subtitle: "Discord üzerinde dijital deneyimler oluşturmaya adanmış sekiz yıl. Bir fikri canlı, nefes alan bir topluluğa dönüştürüyorum.",
    stat1Value: "50K+", stat1Label: "Üye",
    stat2Value: "8+",   stat2Label: "Yıl",
    stat3Value: "24/7", stat3Label: "Aktif",
    aboutBtn: "Hakkımda",
    joinBtn: "Hollywood Sunucusuna Katıl",
    badgeHollywood: "Hollywood",
    badgeCommunity: "Topluluk",

    aboutTitle: "Profil Kartı",
    nationalityTitle: "Milliyet", nationalityValue: "Iraklı",
    locationTitle: "Yaşadığı yer", locationValue: "Türkiye",
    ageTitle: "Yaş",               ageValue: "20 yaşında",

    visionStart: "Sadece sunucu yönetiminin",
    visionHighlight: "ötesinde bir vizyon",
    visionDesc: "Hedef hiçbir zaman sadece sayıları toplamak değildi; gerçek bir topluluk yaratmak, tutkulu insanları bir araya getirmek ve kaliteli eğlence ile anlamlı sohbetler için bir ortam sunmaktı.",
    visionPoint1: "Güvenli ve profesyonelce organize edilmiş bir ortam",
    visionPoint2: "Sürekli etkinlikler ve kesintisiz aktivite",
    visionPoint3: "Yetenekleri desteklemek ve seçkin olanları onurlandırmak",

    ctaTitle: "Hollywood seni bekliyor",
    ctaDescStart: "Şu sayıdan fazla üyesi olan bir topluluğa katıl:",
    ctaDescMid: "50.000",
    ctaDescEnd: "üye. Anılar burada yaratılır ve gerçek gösteri burada başlar.",

    footerRights: "Tüm hakları saklıdır"
  }
};

const dirOf = (lang) => (lang === "ar" ? "rtl" : "ltr");

const LANG_LABELS = { ar: "العربية", en: "English", tr: "Türkçe" };

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;
  document.documentElement.dir = dirOf(lang);

  document.title = dict.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  const currentLabel = document.getElementById("langCurrent");
  if (currentLabel) currentLabel.textContent = LANG_LABELS[lang] || lang;

  document.querySelectorAll(".lang-option").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  try { localStorage.setItem("portfolio_lang", lang); } catch (_) {}
}

function initLanguage() {
  let saved = "ar";
  try { saved = localStorage.getItem("portfolio_lang") || "ar"; } catch (_) {}
  if (!translations[saved]) saved = "ar";
  applyLanguage(saved);

  const switcher = document.getElementById("langSwitcher");
  const toggle = document.getElementById("langToggle");
  if (!switcher || !toggle) return;

  const closeMenu = () => {
    switcher.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };
  const openMenu = () => {
    switcher.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    if (switcher.classList.contains("open")) closeMenu();
    else openMenu();
  });

  document.querySelectorAll(".lang-option").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const lang = btn.getAttribute("data-lang");
      applyLanguage(lang);
      closeMenu();
    });
  });

  document.addEventListener("click", (e) => {
    if (!switcher.contains(e.target)) closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

function initRevealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el) => io.observe(el));
}

function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initRevealOnScroll();
  initYear();
});
