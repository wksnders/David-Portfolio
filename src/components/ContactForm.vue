<script setup>
import { ref } from 'vue'
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
const sendingMessage = getTranslationRef('ContactFormSendingMessage')

const namePlaceholder = getTranslationRef('ContactFormNamePlaceholder')
const emailPlaceholder = getTranslationRef('ContactFormEmailPlaceholder')
const subjectPlaceholder = getTranslationRef('ContactFormSubjectPlaceholder')
const messagePlaceholder = getTranslationRef('ContactFormMessagePlaceholder')

// UI state
const formStatus = ref(null) // 'success' | 'error' | null
const statusText = ref('')
const isLoading = ref(false)

const GOOGLE_FORM_ENDPOINT = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScrNhYpeNq8VZpHwvsMr7n3ELs-0RbfeCpjE-BM1OwzCbURzg/formResponse'

async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  const urlEncoded = new URLSearchParams();
  for (const [key, value] of formData.entries()) {
    urlEncoded.append(key, value);
  }

  isLoading.value = true;
  formStatus.value = null;
  statusText.value = '';

  try {
    // Google Forms responds with 200 even on errors
    await fetch(GOOGLE_FORM_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors', // IMPORTANT for Google
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded.toString(),
    });

    // Treat no-cors success as a success
    form.reset();
    formStatus.value = 'success';
    statusText.value = successMessage.value;

  } catch (err) {
    console.error(err);
    formStatus.value = 'error';
    statusText.value = errorMessage.value;
  } finally {
    isLoading.value = false;

    setTimeout(() => {
      formStatus.value = null;
      statusText.value = '';
    }, 5000);
  }
}
</script>

<template>
  <section v-if="ready" class="contact-form">
    <h1>{{ headerText }}</h1>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">{{ nameLabel }}</label>
        <input id="name" type="text" name="entry.111088163" :placeholder="namePlaceholder" required />
      </div>

      <div class="form-group">
        <label for="email">{{ emailLabel }}</label>
        <input id="email" name="entry.1696685616" type="email" :placeholder="emailPlaceholder" required />
      </div>

      <div class="form-group">
        <label for="subject">{{ subjectLabel }}</label>
        <input id="subject" name="entry.588850040" type="text" :placeholder="subjectPlaceholder" required />
      </div>

      <div class="form-group">
        <label for="message">{{ messageLabel }}</label>
        <textarea
          id="message"
          rows="5"
          :placeholder="messagePlaceholder"
          name="entry.2076534474"
          required
        ></textarea>
      </div>
      <button type="submit" :disabled="isLoading">
        {{ isLoading ? sendingMessage : submitLabel }}
      </button>
    </form>

    <p v-if="formStatus === 'success'" style="color: green">{{ statusText }}</p>
    <p v-if="formStatus === 'error'" style="color: red">{{ statusText }}</p>
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
