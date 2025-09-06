<script setup>
import { defineProps } from 'vue'
import useLocalization from '../../composables/useLocalization'

const props = defineProps({
  basePath: String, // e.g., "teaching.Classroom.0"
})

const { getTranslationRef, ready } = useLocalization()

// Pulling localized fields
const locationLink = getTranslationRef(`${props.basePath}.locationLink`)
const locationText = getTranslationRef(`${props.basePath}.locationText`)
const textAfter = getTranslationRef(`${props.basePath}.textAfter`)
</script>

<template>
  <div class="classroom-item">
    <div v-if="!ready">Loading...</div>
    <p v-else>
      <!-- Render location as link if present -->
      <template v-if="locationLink">
        <RouterLink :to="locationLink">{{ locationText }}</RouterLink>
      </template>
      <template v-else>
        {{ locationText }}
      </template>
      {{ textAfter }}
    </p>
  </div>
</template>

<style scoped>
.classroom-item p {
  margin: 0;
  line-height: 1.5;
}

.classroom-item a {
  color: var(--color-hyperlink);
  text-decoration: underline;
}
</style>
