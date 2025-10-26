<script setup>
import { defineProps } from 'vue'
import useLocalization from '../../composables/useLocalization'

const props = defineProps({
  basePath: String,
})

const { getTranslationRef, ready } = useLocalization()

// Fields
const bookTitle = getTranslationRef(`${props.basePath}.Title`)
const bookLink = getTranslationRef(`${props.basePath}.Link`)
const additionalText = getTranslationRef(`${props.basePath}.AdditionalText`)

const testimonialLabel = getTranslationRef(`${props.basePath}.TestimonialLabel`)
const testimonialLink = getTranslationRef(`${props.basePath}.TestimonialLink`)

const subtext = getTranslationRef(`${props.basePath}.Subtext`)
</script>

<template>
  <div class="book-item">
    <div v-if="!ready">Loading...</div>
    <div v-else>
      <!-- Title -->
      <p class="book-title">
        <a v-if="bookLink" :href="bookLink" target="_blank" rel="noopener noreferrer">
          {{ bookTitle }}
        </a>
        <em v-else>{{ bookTitle }}</em>
      </p>

      <!-- Extra info (translator, co-writer, etc.) -->
      <p v-if="additionalText" class="book-extra">
        {{ additionalText }}
      </p>

      <!-- Testimonial link -->
      <p v-if="testimonialLink" class="book-testimonial">
        <RouterLink :to="testimonialLink">
          {{ testimonialLabel || 'Testimonial' }}
        </RouterLink>
      </p>

      <!-- Subtext (small notes) -->
      <p v-if="subtext" class="book-subtext">
        {{ subtext }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.book-item {
  margin-bottom: 1rem;
}

.book-title {
  font-weight: bold;
  margin: 0;
}

.book-title em {
  font-style: italic;
  font-weight: normal;
}

.book-extra {
  margin: 0.25rem 0;
  font-style: italic;
  color: var(--color-subtext, #555);
}

.book-testimonial {
  margin-top: 0.5rem;
}

.book-subtext {
  font-size: 0.85em;
  color: var(--color-subtext, #666);
  margin: 0.25rem 0 0;
}

.book-item a {
  color: var(--color-hyperlink);
  text-decoration: underline;
}
</style>
