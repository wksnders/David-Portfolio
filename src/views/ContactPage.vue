<script setup>
import ContactForm from '../components/ContactForm.vue';
import About from '../components/About.vue'
</script>

<template>
  <main class="main-content">
    <div class="main-column">
        <ContactForm/>
    </div>

    <aside class="about-column">
    </aside>
  </main>
</template>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 800px) {
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

