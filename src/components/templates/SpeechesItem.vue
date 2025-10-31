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

const testimonialLabel = getTranslationRef(`${props.basePath}.TestimonialLabel`)
const testimonialLink = getTranslationRef(`${props.basePath}.TestimonialLink`)
</script>

<template>
  <div v-if="ready" class="speech-item">
    <p class="speech-title">
      <template v-if="titleLink">
        <a :href="titleLink" target="_blank" rel="noopener noreferrer">
          {{ title }}
        </a>
      </template>
      <template v-else>
        {{ title }}
      </template>
      <span v-if="additionalText"> — {{ additionalText }} </span>
      <RouterLink v-if="testimonialLink" :to="testimonialLink" class="testimonial-link">
        {{ testimonialLabel || 'Testimonial' }}
      </RouterLink>
    </p>
  </div>
</template>

<style scoped>
.speech-item {
  margin-bottom: 0.5rem;
}

.speech-title {
  margin: 0;
}
</style>
