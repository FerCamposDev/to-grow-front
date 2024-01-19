const flagMobile = document.getElementById("lang-flag-mobile");
const flagDesktop = document.getElementById("lang-flag-desktop");
const whatsappButtons = document.getElementsByClassName('i18n-whatsapp')

function changeLang(lang) {
  i18next.changeLanguage(lang);
}

function updateContent() {
  const lang = i18next.language;
  flagMobile.setAttribute('src', `/img/flags/${lang}.png`);
  flagDesktop.setAttribute('src', `/img/flags/${lang}.png`);
  for (let i = 0; i < whatsappButtons.length; i++) {
    whatsappButtons[i].setAttribute('href', i18next.t('whatsapp'));
  }

  const elements = document.getElementsByClassName("i18n");
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const key = element.getAttribute("data-i18n");
    element.innerHTML = i18next.t(key);
  }
}

async function i18Loader() {
  const initialLang = localStorage.getItem('lang') || 'en';
  const langs = ["en", "es"];
  const jsons = await Promise.all(
    langs.map((lang) => fetch("lang/" + lang + ".json").then((r) => r.json()))
  );

  const res = langs.reduce((acc, lang, idx) => {
    acc[lang] = { translation: jsons[idx] };
    return acc;
  }, {});

  await i18next.init({
    lng: initialLang,
    // debug: true,
    resources: res
  });
  updateContent();

  i18next.on("languageChanged", (lang) => {
    localStorage.setItem('lang', lang);
    updateContent();
  });

}

i18Loader();