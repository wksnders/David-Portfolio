<script setup>
import IntroductionImages from '../components/IntroductionImages.vue'
import TemplateSection from '../components/TemplateSection.vue'
import About from '../components/About.vue'

const sections = [
  { templateType: 'writing', },
  { templateType: 'teaching', },
  { templateType: 'editing', },
]
</script>

<template>
  <main class="main-content">
    <div class="main-column">
      <IntroductionImages />

      <TemplateSection
        v-for="(section, index) in sections"
        :key="index"
        :template-type="section.templateType"
      />
    </div>

    <aside class="about-column">
      <About />
    </aside>
  </main>
</template>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 800px) {
  .main-content {
    flex-direction: row;
    align-items: flex-start;
  }

  .main-column {
    flex: 1; /* takes remaining width */
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .about-column {
    width: 300px; /* fixed width for side column */
    flex-shrink: 0;
  }
}

/* Small screens: about goes below main column automatically */
@media (max-width: 799px) {
  .main-column,
  .about-column {
    width: 100%;
  }
}
</style>
