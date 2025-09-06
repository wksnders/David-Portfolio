<script setup>
import { defineProps } from 'vue'
import useLocalization from '../../composables/useLocalization'

const props = defineProps({
  basePath: String,
})

const { getTranslationRef, ready } = useLocalization()

// Pull translations using basePath
const title = getTranslationRef(`${props.basePath}.title`)
const titleLink = getTranslationRef(`${props.basePath}.titleLink`)
const additionalText = getTranslationRef(`${props.basePath}.additionalText`)
</script>

<template>
  <div v-if="ready" class="subtitle-item">
    <p class="subtitle-title">
      <template v-if="titleLink">
        <a :href="titleLink" target="_blank" rel="noopener noreferrer">
          {{ title }}
        </a>
      </template>
      <template v-else>
        {{ title }}
      </template>
      <span v-if="additionalText"> — {{ additionalText }}</span>
    </p>
  </div>
</template>

<style scoped>
.subtitle-item {
  margin-bottom: 0.5rem;
}

.subtitle-title {
  margin: 0;
}
</style>
