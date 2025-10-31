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
  <li class="one-on-one-item">
    <div v-if="!ready">Loading...</div>
    <p v-else>
      {{ student }}
      <template v-if="testimonialLink">
        <RouterLink class="testimonial-link" :to="testimonialLink">{{ testimonialText }}</RouterLink>
      </template>
    </p>
  </li>
</template>

<style scoped>
.one-on-one-item{
  margin-left: 2rem;
}

.one-on-one-item p {
  margin: 0;
  line-height: 1.5;
}

</style>
