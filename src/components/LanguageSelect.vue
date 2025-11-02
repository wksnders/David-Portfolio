<script setup>
import { ref, watch, onMounted } from 'vue'
import useLocalization from '../composables/useLocalization'

const { ready, setManualLanguage, manualLang } = useLocalization()

const languages = [
  { displayText: "English", languageCode: "en" },
  { displayText: "한국어", languageCode: "ko" }
]

// bind current selection (start with manualLang or fallback)
const selectedLang = ref(manualLang.value || languages[0].languageCode)

// watch for changes and apply manual override
watch(selectedLang, (newLang) => {
  setManualLanguage(newLang)
})

onMounted(() => {
  const browserLang = navigator.language.split('-')[0]
  const activeLang = manualLang.value || browserLang

  if (selectedLang.value !== activeLang) {
    selectedLang.value = activeLang
    setManualLanguage(activeLang)
  }
})
</script>

<template>
  <div class="lang-container">
    <template v-if="ready">
      <select v-model="selectedLang" class="language-select">
        <option
          v-for="lang in languages"
          :key="lang.languageCode"
          :value="lang.languageCode"
        >
          {{ lang.displayText }}
        </option>
      </select>
    </template>
    <template v-else>
      <h1>Loading...</h1>
    </template>
  </div>
</template>

<style scoped>

.lang-container {
    width: 100%;
    text-align: center;
    padding-bottom: .5rem;
}

.language-select {
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  border: 1px solid var(--color-border);
  background: var(--color-background);
}

@media (min-width: 800px) {
  .lang-container {
      width: auto;
      position: absolute;
      top: 0;
      right: 1rem;
  }
}
</style>
