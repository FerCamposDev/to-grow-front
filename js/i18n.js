function updateContent() {
  const elements = document.getElementsByClassName("i18n");
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const key = element.getAttribute("data-i18n");
    element.innerHTML = i18next.t(key);
  }
}

async function i18Loader() {
  const langs = ["en", "es"];
  const jsons = await Promise.all(
    langs.map((lang) => fetch("lang/" + lang + ".json").then((r) => r.json()))
  );

  const res = langs.reduce((acc, lang, idx) => {
    acc[lang] = { translation: jsons[idx] };
    return acc;
  }, {});

  await i18next.init({
    lng: "en",
    // debug: true,
    resources: res
  });
  updateContent();

  i18next.on("languageChanged", (lang) => {
    langFlag.setAttribute('src', `/img/flags/${lang}.png`)
    updateContent();
  });

  const langSelector = document.getElementById("lang-selector");
  const langFlag = document.getElementById("lang-flag");
  const btnEn = document.getElementById("lang-en");
  const btnEs = document.getElementById("lang-es");

  langSelector.removeAttribute("disabled");
  btnEn.addEventListener("click", () => {
    i18next.changeLanguage('en');
  });

  btnEs.addEventListener("click", () => {
    i18next.changeLanguage('es');
  });
}

i18Loader();