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
const testimonialLink = getTranslationRef(`${props.basePath}.testimonialLink`)
const testimonialLinkLabel = getTranslationRef(`${props.basePath}.testimonialLinkLabel`)
</script>

<template>
  <div v-if="ready" class="article-item">
    <p>
        <q>
            <a  v-if="titleLink" :href="titleLink" target="_blank" rel="noopener noreferrer">
              {{ title }}
            </a>
            <span v-else>{{ title }}</span>
        </q>
        {{ additionalText? additionalText:"" }}
    </p>

    <div v-if="testimonialLink">
        <RouterLink :to="testimonialLink" class="testimonial-link">
          {{ testimonialLinkLabel || testimonialLink }}
        </RouterLink>
      </div>
    </div>
</template>

<style scoped>
.article-item {
  margin-bottom: 1rem;
}
</style>
