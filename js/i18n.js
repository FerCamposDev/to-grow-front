const flagMobile = document.getElementById("lang-flag-mobile");
const flagDesktop = document.getElementById("lang-flag-desktop");
const whatsappButtons = document.getElementsByClassName('i18n-whatsapp')
const formName = document.getElementById('form-name');
const formProject = document.getElementById('form-project');
const formMsg = document.getElementById('form-msg');

function changeLang(lang) {
  i18next.changeLanguage(lang);
}

function updateContent() {
  const lang = i18next.language;

  document.documentElement.setAttribute('lang', lang);

  flagMobile.setAttribute('src', `/img/flags/${lang}.png`);
  flagDesktop.setAttribute('src', `/img/flags/${lang}.png`);
  formName.setAttribute('placeholder', i18next.t('your_name'));
  formProject.setAttribute('placeholder', i18next.t('project'));
  formMsg.setAttribute('placeholder', i18next.t('message'));
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
  let defaultLang = window.navigator.language.split('-')[0];
  console.log('defaultLang :>> ', defaultLang);
  if (defaultLang !== 'es' && defaultLang !== 'en') navigatorLang = 'en';
  const initialLang = localStorage.getItem('lang') || defaultLang;
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