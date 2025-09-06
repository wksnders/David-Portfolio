<template>
  <section class="image-section">
    <div class="image-wrapper">
      <img src="/images/David1.jpg" alt="Image of David" />
    </div>
    <div class="image-wrapper second-image">
      <img src="/images/David1.jpg" alt="Image of David" />
    </div>
  </section>
</template>

<style scoped>
.image-section {
  width: 100%;
  display: flex;
  flex-direction: column; 
  gap: 1rem;
  padding: 0 10%;
  box-sizing: border-box;
}

.image-wrapper {
  width: 100%;
  aspect-ratio: 1;
}

.second-image {
  display: none;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

@media (min-width: 800px) {
  .image-section {
    flex-direction: row;
    gap: 2rem;
  }

  .image-wrapper {
    width: 50%; 
  }


  .second-image {
    display: block;
  }
}
</style>