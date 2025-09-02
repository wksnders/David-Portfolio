<script setup>
import { defineProps } from 'vue'
import useLocalization from '../composables/useLocalization.js'

const props = defineProps({
  id: String,
  templateType: String,
  subsections: Array, // objects with { name, itemComponent }
})

const { prefixEntryCounts,getTranslationRef, ready } = useLocalization()

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
        <!-- Localized subsection title -->
        <h4>{{ getTranslationRef(`Subsection.${props.templateType}.${subsection.name}`) }}</h4>

        <div class="entries">
          <!-- Render entries from localization -->
            <component
              v-for="i in prefixEntryCounts(`${props.templateType}.${subsection.name}.`)"
              :key="i"
              :is="subsection.itemComponent"
              :base-path="`${props.templateType}.${subsection.name}.${i}`"
            />
        </div>
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
  gap: 1rem;
}

.subsection h4 {
  margin-bottom: 0.5rem;
  color: var(--color-soft-heading);
}

.entries {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
