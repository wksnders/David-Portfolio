<script setup>
import IntroductionImages from '../components/IntroductionImages.vue'
import TemplateSection from '../components/TemplateSection.vue'
import About from '../components/About.vue'

import ArticlesItem from '../components/templates/ArticlesItem.vue'
import BooksItem from '../components/templates/BooksItem.vue'
import ClassroomItem from '../components/templates/ClassroomItem.vue'
import OneOnOneItem from '../components/templates/OneOnOneItem.vue'
import PublicRelationsItem from '../components/templates/PublicRelationsItem.vue'
import SpeechesItem from '../components/templates/SpeechesItem.vue'
import SubSurtitlesItem from '../components/templates/SubSurtitlesItem.vue'

const sections = [
  {
    templateType: 'writing',
    id: 'writing',
    subsections: [
      { name: 'PublicRelations', itemComponent: PublicRelationsItem, },
      { name: 'Books', itemComponent: BooksItem, },
      { name: 'Articles', itemComponent: ArticlesItem, },
    ],
  },
  {
    templateType: 'editing',
    id: 'editing',
    subsections: [
      { name: 'PublicRelations', itemComponent: PublicRelationsItem, },
      { name: 'Books', itemComponent: BooksItem, },
      { name: 'Speeches', itemComponent: SpeechesItem, },
      { name: 'Sub-Surtitles', itemComponent: SubSurtitlesItem, },
    ],
  },
  {
    templateType: 'teaching',
    id: 'teaching',
    subsections: [
      { name: 'OneOnOne', itemComponent: OneOnOneItem, },
      { name: 'Classroom', itemComponent: ClassroomItem, },
    ],
  },
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

@media (min-width: 1000px) {
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
