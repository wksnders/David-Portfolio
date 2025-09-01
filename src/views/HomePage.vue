<script setup>
import IntroductionImages from '../components/IntroductionImages.vue'
import TemplateSection from '../components/TemplateSection.vue'
import About from '../components/About.vue'

const sections = [
  { templateType: 'writing',id:'writing', subsections: ['Public Relations', 'Books', 'Articles'], },
  { templateType: 'teaching',id:'teaching', subsections: ['Classroom', '1:1'], },
  { templateType: 'editing',id:'editing', subsections: ['Public Relations', 'Books', 'Speeches', 'Sub-Surtitles'], },
]
</script>

<template>
  <main class="main-content">
    <div class="main-column">
      <IntroductionImages />

      <TemplateSection
        v-for="(section, index) in sections"
        :key="index"
        :id="section.id"
        :template-type="section.templateType"
        :subsections="section.subsections"
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
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .about-column {
    width: 300px;
    flex-shrink: 0;
  }
}

@media (max-width: 799px) {
  .main-column,
  .about-column {
    width: 100%;
  }
}
</style>
