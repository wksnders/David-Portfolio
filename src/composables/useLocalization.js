import { reactive, ref, watchEffect } from 'vue'
import yaml from 'js-yaml'

const fallbackLanguage = 'en'
const locales = reactive({})
let loadingPromise = null
const ready = ref(false)

function getCurrentLanguage() {
  const search = window.location.search || window.location.hash.split('?')[1] || ''
  const urlLang = new URLSearchParams(search).get('lang')
  const browserLang = navigator.language.split('-')[0]
  return urlLang || browserLang || fallbackLanguage
}

async function loadLanguage(lang) {
  if (locales[lang]) return
  try {
    const res = await fetch(`./locales/${lang}.yaml`)
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

  watchEffect(() => {
    if (ready.value) {
      const langVal = locales[lang]?.[key]
      const fallbackVal = locales[fallbackLanguage]?.[key]

      if (langVal !== undefined) {
        value.value = langVal
      } else if (fallbackVal !== undefined) {
        value.value = fallbackVal
      } else {
        value.value = `INVALID_KEY ${key}`
      }
    }
  })

  return value
}

/**
 * Returns the number of items that exist under a given prefix.
 * Example: prefix = "writing.Public Relations." will count
 * writing.Public Relations.0, writing.Public Relations.1, etc.
 */
function prefixEntryCounts(prefix) {
  const lang = getCurrentLanguage()
  const keys = Object.keys(locales[lang] || {})
  const fallbackKeys = Object.keys(locales[fallbackLanguage] || {})
  const allKeys = new Set([...keys, ...fallbackKeys])

  // Collect indices that match the prefix
  const indices = [...allKeys]
    .map(key => {
      if (key.startsWith(prefix)) {
        const rest = key.slice(prefix.length)
        const firstPart = rest.split('.')[0]
        const idx = parseInt(firstPart, 10)
        return isNaN(idx) ? -1 : idx
      }
      return -1
    })
    .filter(i => i >= 0)

  return indices.length ? Math.max(...indices)  : 0
}

export default function useLocalization() {
  return {
    ready,
    preloadLanguages,
    getTranslationRef,
    prefixEntryCounts
  }
}
