import en from "../locales/en.yaml"
import ko from "../locales/ko.yaml"

const languages = { en, ko }
const fallbackLanguage = "en"

export default function useLocalization(key) {
  const languageOverride = new URLSearchParams(window.location.search).get("lang")
  const browserLang = navigator.language.split("-")[0]
  const lang = languageOverride || browserLang || fallbackLanguage

  return languages[lang]?.[key] 
      || languages[fallbackLanguage]?.[key] 
      || `INVALID_KEY ${key}`
}
