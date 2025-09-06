<script setup>
import { defineProps } from 'vue'
import useLocalization from '../../composables/useLocalization'

const props = defineProps({
  basePath: String,
})

const { getTranslationRef, ready } = useLocalization()

// Fields
const location = getTranslationRef(`${props.basePath}.location`)

const bodyText1 = getTranslationRef(`${props.basePath}.bodyText1`)
const bodyLinkText1 = getTranslationRef(`${props.basePath}.bodyLinkText1`)
const bodyLink1 = getTranslationRef(`${props.basePath}.bodyLink1`)
const bodyText2 = getTranslationRef(`${props.basePath}.bodyText2`)
const bodyLinkText2 = getTranslationRef(`${props.basePath}.bodyLinkText2`)
const bodyLink2 = getTranslationRef(`${props.basePath}.bodyLink2`)
const bodyText3 = getTranslationRef(`${props.basePath}.bodyText3`)

const testimonialLabel = getTranslationRef(`${props.basePath}.testimonialLabel`)
const testimonialLink = getTranslationRef(`${props.basePath}.testimonialLink`)
</script>

<template>
  <div class="pr-item">
    <div v-if="!ready">Loading...</div>
    <div v-else>
      <p class="location">{{ location }}</p>

      <p class="body">
        {{ bodyText1 }}
        <a v-if="bodyLink1 && bodyLinkText1" :href="bodyLink1" target="_blank" rel="noopener noreferrer">
          {{ bodyLinkText1 }}
        </a>
        {{ bodyText2 }}
        <a v-if="bodyLink2 && bodyLinkText2" :href="bodyLink2" target="_blank" rel="noopener noreferrer">
          {{ bodyLinkText2 }}
        </a>
        {{ bodyText3 }}
      </p>

      <p v-if="testimonialLink" class="testimonial">
        <a :href="testimonialLink" target="_blank" rel="noopener noreferrer">
          {{ testimonialLabel || 'Testimonials' }}
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.pr-item {
  margin-bottom: 1.5rem;
}

.pr-item .location {
  margin: 0 0 0.5rem;
}

.pr-item .body {
  margin: 0;
  line-height: 1.5;
}

.pr-item .testimonial {
  margin-top: 0.5rem;
}

.pr-item a {
  color: var(--color-hyperlink);
  text-decoration: underline;
}
</style>
