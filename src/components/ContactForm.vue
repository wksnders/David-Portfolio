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

const AJAX_ENDPOINT = 'https://formsubmit.co/ajax/f909b58db1cd027b448977d3b69bb4c1'

async function handleSubmit(e) {
  e.preventDefault()
  const form = e.target
  const formData = new FormData(form)

  const urlEncoded = new URLSearchParams()
  for (const [key, value] of formData.entries()) {
    urlEncoded.append(key, value)
  }

  isLoading.value = true
  formStatus.value = null
  statusText.value = ''

  try {
    const res = await fetch(AJAX_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      body: urlEncoded.toString()
    })

    const data = await res.json().catch(() => null)

    if (res.ok && data?.success === "true") {
      form.reset()
      formStatus.value = 'success'
      statusText.value = successMessage.value
    } else {
      formStatus.value = 'error'
      statusText.value = errorMessage.value
    }
  } catch (err) {
    console.error(err)
    formStatus.value = 'error'
    statusText.value = errorMessage.value
  } finally {
    isLoading.value = false
    // auto-hide after 5 seconds
    if (formStatus.value) {
      setTimeout(() => {
        formStatus.value = null
        statusText.value = ''
      }, 5000)
    }
  }
}
</script>

<template>
  <section v-if="ready" class="contact-form">
    <h1>{{ headerText }}</h1>

    <form @submit.prevent="handleSubmit">
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

      <input type="text" name="_honey" style="display:none" />
      <input type="hidden" name="_url" style="display:none" value="https://davidlkendall.com/#/contact-me">

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
