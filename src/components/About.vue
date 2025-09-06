<script setup>
import useLocalization from '../composables/useLocalization'

const { getTranslationRef } = useLocalization()
const headerText = getTranslationRef('AboutMeSectionTitle')
const bodyText = getTranslationRef('AboutMeSectionBody')
const navTestimonials = getTranslationRef('navigation.testimonials')
</script>

<template>
  <section class="about-me" id="about">
    <h1>{{ headerText }}</h1>
    <p>{{ bodyText }}</p>
    <nav class="navigation">
      <RouterLink to="/testimonials">{{ navTestimonials }}</RouterLink>
    </nav>
  </section>
</template>

<style scoped>
.about-me {
  padding: 1.5rem;
  color: var(--color-text);
}

.about-me h1 {
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.about-me p {
  color: var(--color-text);
  line-height: 1.6;
}
.navigation{
  padding: 1rem 0rem;
}
</style>
