<script setup>
import TestimonialItem from '../components/templates/Testimonial.vue'
import useLocalization from '../composables/useLocalization.js'

const { prefixEntryCounts, getTranslationRef, ready } = useLocalization()

// Section title
const sectionTitle = getTranslationRef('Section.testimonials')

// Number of testimonials
const testimonialCount = prefixEntryCounts('testimonials.')
</script>

<template>
  <section class="testimonials-section">
    <div v-if="!ready">Loading...</div>
    <h2 v-else>{{ sectionTitle }}</h2>

    <div class="entries">
      <TestimonialItem
        v-for="i in testimonialCount"
        :key="i"
        :base-path="`testimonials.${i}`"
        :id="`testimonial-${i}`"
      />
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.entries {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
