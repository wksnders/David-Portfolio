<script setup>
import { defineProps } from 'vue'
import useLocalization from '../composables/useLocalization.js'

const props = defineProps({
  id: String,
  templateType: String,
  subsections: Array, // objects with { name, itemComponent }
})

const { prefixEntryCounts, getTranslationRef, ready } = useLocalization()

// Localized section title
const sectionTitle = getTranslationRef(`Section.${props.templateType}`)
</script>

<template>
  <section class="template-section" :id="id">
    <!-- Section title -->
    <div v-if="!ready">Loading...</div>
    <h2 v-else>{{ sectionTitle }}</h2>

    <!-- Subsections -->
    <div
      v-for="(subsection, index) in subsections"
      :key="index"
      class="subsection"
    >
      <div v-if="!ready">Loading...</div>
      <template v-else>
        <p v-if="getTranslationRef(`Subsection.${props.templateType}.${subsection.name}.description`)">
          <strong>{{ getTranslationRef(`Subsection.${props.templateType}.${subsection.name}`) }}</strong>
          {{ getTranslationRef(`Subsection.${props.templateType}.${subsection.name}.description`) }}
        </p>
        <h4 v-else>{{ getTranslationRef(`Subsection.${props.templateType}.${subsection.name}`) }}</h4>

        <div v-if="prefixEntryCounts(`${props.templateType}.${subsection.name}.`)>0" class="entries">
          <component
            v-for="i in prefixEntryCounts(`${props.templateType}.${subsection.name}.`) "
            :key="i"
            :is="subsection.itemComponent"
            :base-path="`${props.templateType}.${subsection.name}.${i}`"
          />
        </div>
        <div v-else class="shorten"></div>
      </template>
    </div>
  </section>
</template>

<style scoped>
.template-section {
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.shorten{
  margin-bottom: -1.25rem;
}

.subsection{
  padding-bottom: .5rem;
}

.subsection p {
  margin: 0 0 0.5rem 0;
  color: var(--color-text);
}

.entries {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
</style>
