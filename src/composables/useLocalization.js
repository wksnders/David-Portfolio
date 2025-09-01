import { reactive, ref, watchEffect } from 'vue'
import yaml from 'js-yaml'

const fallbackLanguage = 'en'
const locales = reactive({})
let loadingPromise = null
const ready = ref(false)

function getCurrentLanguage() {
  const urlLang = new URLSearchParams(window.location.search).get('lang')
  const browserLang = navigator.language.split('-')[0]
  return urlLang || browserLang || fallbackLanguage
}

async function loadLanguage(lang) {
  if (locales[lang]) return
  try {
    const res = await fetch(`/locales/${lang}.yaml`)
    locales[lang] = yaml.load(await res.text())
  } catch (e) {
    console.error(`Failed to load ${lang}.yaml`, e)
    locales[lang] = {}
  }
}

async function preloadLanguages() {
  if (!loadingPromise) {
    const lang = getCurrentLanguage()
    loadingPromise = Promise.all([
      loadLanguage(fallbackLanguage),
      lang !== fallbackLanguage ? loadLanguage(lang) : null
    ]).then(() => {
      ready.value = true
    })
  }
  return loadingPromise
}

function getTranslationRef(key) {
  const lang = getCurrentLanguage()
  const value = ref('')

  // Update value automatically when ready
  watchEffect(() => {
    if (ready.value) {
      value.value =
        locales[lang]?.[key] ||
        locales[fallbackLanguage]?.[key] ||
        `INVALID_KEY ${key}`
    }
  })

  return value
}

export default function useLocalization() {
  return {
    ready,               
    preloadLanguages,    
    getTranslationRef       
  }
}
