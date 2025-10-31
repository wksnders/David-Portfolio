<script setup>
import useLocalization from '../composables/useLocalization'

const { getTranslationRef } = useLocalization()
const headerText = getTranslationRef('AboutMeSectionTitle')
const bodyText1 = getTranslationRef('AboutMeSectionBody1')
const bodyText2 = getTranslationRef('AboutMeSectionBody2')
const bodyText3 = getTranslationRef('AboutMeSectionBody3')
const navTestimonials = getTranslationRef('navigation.testimonials')
</script>

<template>
  <section class="about-me" id="about">
    <h1>{{ headerText }}</h1>
    <p>{{ bodyText1 }}</p>
    <p>{{ bodyText2 }}</p>
    <p>{{ bodyText3 }}</p>
    <nav class="navigation">
      <RouterLink to="/testimonials" class="testimonial-link">{{ navTestimonials }}</RouterLink>
    </nav>
  </section>
</template>

<style scoped>
.about-me {
  padding: 1rem;
  color: var(--color-text);
}

.about-me h1 {
  color: var(--color-heading);
  margin-bottom: .25rem;
}

.about-me p {
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 1rem;
}
</style>
