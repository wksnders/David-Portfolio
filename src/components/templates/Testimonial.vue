<script setup>
import { defineProps, ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import useLocalization from '../../composables/useLocalization'

const props = defineProps({
  basePath: String,
  id: String, // e.g., "testimonial-1"
})

const { getTranslationRef, ready } = useLocalization()
const route = useRoute()

// Pull translations using basePath
const personName = getTranslationRef(`${props.basePath}.personName`)
const role = getTranslationRef(`${props.basePath}.role`)
const quote = getTranslationRef(`${props.basePath}.quote`)

// Track if this testimonial is highlighted
const isHighlighted = ref(false)

const checkHighlight = () => {
  isHighlighted.value = route.hash === `#${props.id}`
  if (isHighlighted.value) {
    document.getElementById(props.id)?.scrollIntoView({ behavior: 'smooth' })
  }
}

// Check initially
onMounted(checkHighlight)

// Also watch for hash changes (when user clicks links)
watch(() => route.hash, checkHighlight)
</script>


<template>
  <div
    v-if="ready"
    :class="['testimonial-item', { highlighted: isHighlighted }]"
    :id="props.id"
  >
    <blockquote class="testimonial-quote">
      “{{ quote }}”
    </blockquote>
    
    <h5 class="testimonial-person">{{ personName }}</h5>
    <p class="testimonial-role">{{ role }}</p>
  </div>
</template>

<style scoped>
.testimonial-item {
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s, border 0.3s;
}

.testimonial-item.highlighted {
  background-color: var(--color-background-accent);
  border: 2px solid var(--color-border-accent);
}

.testimonial-person {
  margin: 0 0 0 3rem;
  font-weight: bold;
}

.testimonial-role {
  margin: 0 0 .25rem 3rem;
  font-style: italic;
  color: var(--color-soft-heading);
}

.testimonial-quote {
  margin: 0.25rem 0 0;
  font-style: italic;
}
</style>
