<script setup>
import { defineProps } from 'vue'
import useLocalization from '../../composables/useLocalization'

const props = defineProps({
  basePath: String,
})

const { getTranslationRef, ready } = useLocalization()

// Pulling localized fields
const student = getTranslationRef(`${props.basePath}.student`)
const testimonialText = getTranslationRef(`${props.basePath}.testimonialText`)
const testimonialLink = getTranslationRef(`${props.basePath}.testimonialLink`)
</script>

<template>
  <div class="one-on-one-item">
    <div v-if="!ready">Loading...</div>
    <p v-else>
      {{ student }}
      <span v-if="testimonialText"> — "{{ testimonialText }}"</span>
      <template v-if="testimonialLink">
        &nbsp;<RouterLink :to="testimonialLink">(link)</RouterLink>
      </template>
    </p>
  </div>
</template>

<style scoped>
.one-on-one-item p {
  margin: 0;
  line-height: 1.5;
}

.one-on-one-item a {
  color: var(--color-hyperlink);
  text-decoration: underline;
}
</style>
