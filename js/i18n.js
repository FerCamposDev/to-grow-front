/* function updateContent() {
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
    debug: true,
    resources: res
  });
  updateContent();
  i18next.on("languageChanged", () => {
    updateContent();
  });
  const langSelector = document.getElementById("langSelector");
  langSelector.removeAttribute("disabled");
  langSelector.addEventListener("change", (e) => {
    i18next.changeLanguage(e.target.value);
  });
}

i18Loader(); */

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
    debug: true,
    resources: res
  });
  updateContent();
  i18next.on("languageChanged", (newLang) => {
    langSelector.innerText = newLang === 'es' ? 'Español' : 'English';
    updateContent();
  });

  const langSelector = document.getElementById("langSelector");
  const btnEn = document.getElementById("langEn");
  const btnEs = document.getElementById("langEs");

  langSelector.removeAttribute("disabled");
  btnEn.addEventListener("click", (e) => {
    i18next.changeLanguage(e.target.value);
  });

  btnEs.addEventListener("click", (e) => {
    i18next.changeLanguage(e.target.value);
  });
}

i18Loader();