<template>
  <section class="image-section">
    <div class="image-wrapper">
      <img src="/images/David1.jpg" alt="Image of David" />
    </div>
    <div class="image-wrapper">
      <img src="/images/David1.jpg" alt="Image of David" />
    </div>
  </section>
</template>

<style scoped>
.image-section {
  width: 100%;
  display: flex;
  flex-direction: column; /* stack by default */
  gap: 1rem;
  padding: 0 10%;
  box-sizing: border-box;
}

/* Image container */
.image-wrapper {
  width: 100%;
  aspect-ratio: 1;
}

/* Image fills container */
.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* Side-by-side for wider screens (>=800px) */
@media (min-width: 800px) {
  .image-section {
    flex-direction: row;
    gap: 2rem;
  }

  .image-wrapper {
    width: 50%; /* each takes half of available width */
  }
}
</style>
