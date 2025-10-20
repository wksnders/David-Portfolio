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
const bodyText1 = getTranslationRef(`${props.basePath}.bodyText1`)
const bodyLink1 = getTranslationRef(`${props.basePath}.bodyLink1`)
const bodyLinkText1 = getTranslationRef(`${props.basePath}.bodyLinkText1`)
const bodyText2 = getTranslationRef(`${props.basePath}.bodyText2`)
</script>

<template>
  <li class="classroom-item">
    <div v-if="!ready">Loading...</div>
    <p v-else>
      <!-- Render location as link if present -->
      <strong class="bold">
        <template v-if="locationLink">
          <RouterLink :to="locationLink">{{ locationText }}</RouterLink>
        </template>
        <template v-else>
          {{ locationText }}
        </template>
      </strong>
      {{ bodyText1 }}
      <a v-if="bodyLink1 && bodyLinkText1" :href="bodyLink1" target="_blank" rel="noopener noreferrer">
        {{ bodyLinkText1 }}
      </a>
      {{ bodyText2 }}
    </p>
  </li>
</template>

<style scoped>
.classroom-item{
  margin-left: 2rem;
}

.bold{
  font-weight: 600;
}

.classroom-item p {
  margin: 0;
  line-height: 1.5;
}

.classroom-item a {
  color: var(--color-hyperlink);
  text-decoration: underline;
}
</style>
