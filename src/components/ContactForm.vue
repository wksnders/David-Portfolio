<script setup>
import useLocalization from '../composables/useLocalization'

const { getTranslationRef, ready } = useLocalization()

const headerText = getTranslationRef('ContactFormPageTitle')
const nameLabel = getTranslationRef('ContactFormNameLabel')
const emailLabel = getTranslationRef('ContactFormEmailLabel')
const subjectLabel = getTranslationRef('ContactFormSubjectLabel')
const messageLabel = getTranslationRef('ContactFormMessageLabel')
const submitLabel = getTranslationRef('ContactFormSubmitButton')
const successMessage = getTranslationRef('ContactFormSuccessMessage')
const errorMessage = getTranslationRef('ContactFormErrorMessage')

const namePlaceholder = getTranslationRef('ContactFormNamePlaceholder')
const emailPlaceholder = getTranslationRef('ContactFormEmailPlaceholder')
const subjectPlaceholder = getTranslationRef('ContactFormSubjectPlaceholder')
const messagePlaceholder = getTranslationRef('ContactFormMessagePlaceholder')

function handleSubmit() {
  alert('Form submitted (demo only, no backend).')
}
</script>

<template>
  <section v-if="ready" class="contact-form">
    <h1>{{ headerText }}</h1>
    <form @submit.prevent="handleSubmit"
    action="https://formsubmit.co/your@email.com"
    >
      <div class="form-group">
        <label for="name">{{ nameLabel }}</label>
        <input id="name" type="text" name="name" :placeholder="namePlaceholder" required />
      </div>

      <div class="form-group">
        <label for="email">{{ emailLabel }}</label>
        <input id="email" name="email" type="email" :placeholder="emailPlaceholder" required />
      </div>

      <div class="form-group">
        <label for="subject">{{ subjectLabel }}</label>
        <input id="subject" name="_subject" type="text" :placeholder="subjectPlaceholder" required />
      </div>

      <div class="form-group">
        <label for="message">{{ messageLabel }}</label>
        <textarea
          id="message"
          rows="5"
          :placeholder="messagePlaceholder"
          name="message"
          required
        ></textarea>
      </div>

      <input type="text" name="_honey" style="display:none">

      <button type="submit">{{ submitLabel }}</button>
    </form>
  </section>
</template>

<style scoped>
.contact-form {
  background-color: var(--color-background);
  padding: 2rem;
  border-radius: 8px;
}

.contact-form h1 {
  color: var(--color-heading);
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
  color: var(--color-text-accent);
}

input,
textarea {
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background-color: var(--color-background);
  color: var(--color-text);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-border-hover);
}

button {
  background-color: var(--color-background-accent);
  border: 1px solid var(--color-border-accent);
  color: var(--color-text-accent);
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

button:hover {
  border-color: var(--color-border-accent-hover);
  color: var(--color-text-accent-active);
}
</style>
