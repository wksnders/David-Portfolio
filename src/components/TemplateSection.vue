<script setup>
import { defineProps } from 'vue'
import useLocalization from '../composables/useLocalization.js'

const props = defineProps({
  templateType: String,
  subsections: Array
})

const { getTranslationRef, ready } = useLocalization()
</script>

<template>
  <section class="template-section">
    <h2>{{ templateType }}</h2>

    <div
      v-for="(subsection, index) in subsections"
      :key="index"
      class="subsection"
    >
      <h3>{{ subsection.name }}</h3>

      <div class="entries">
        <!-- Loading state -->
        <div v-if="!ready">Loading...</div>

        <!-- Entries from localization -->
        <template v-else>
          <component
            v-for="(entry, i) in getTranslationRef(`${templateType}.${subsection.name}`)"
            :key="i"
            :is="subsection.itemComponent"
            :entry="entry"
          />
        </template>
      </div>
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

.subsection h3 {
  margin-bottom: 0.5rem;
}

.entries {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
