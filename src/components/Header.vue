<script setup>
import useLocalization from '../composables/useLocalization'

const { getTranslationRef,ready} = useLocalization()
const headerText = getTranslationRef('PortfolioHeaderTitle')
</script>

<template>
  <div class="header-container">
    <template v-if="ready">
      <div class="header-bar left"></div>
      <h1>{{ headerText }}</h1>
      <div class="header-bar right"></div>
    </template>
    <template v-else>
      <h1>Loading...</h1>
    </template>
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
  box-sizing: border-box;
  flex-wrap: wrap;
  text-align: center;
  color: var(--color-text);
}

/* The horizontal bars for larger screens */
.header-bar {
  height: 1px;
  background-color: var(--color-text);
  flex: 1 1 20%;
  margin: 0 1rem;
}

h1 {
  flex: 1 1 30%;
  margin: 0;
  white-space: nowrap;
}

@media (max-width: 800px) {
  .header-container {
    flex-direction: column;
    border-top: 2px solid var(--color-text);
    border-bottom: 2px solid var(--color-text);
    padding: 0.5rem 0;
  }

  .header-bar {
    display: none;
  }

  h1 {
    margin: 0.5rem 0;
  }
}
</style>

