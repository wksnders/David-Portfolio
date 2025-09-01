<script setup>
import Navigation from './Navigation.vue';
</script>

<template>
    <div class="footer-container">
        <div class="border"></div>
        <Navigation/>
    </div>
    
</template>

<style scoped>
.footer-container{
    padding: 1rem;
    width: 100%;
}

.border{
    width: 100%;
    height: 1px;
    border-top: 1px solid var(--color-text);
}
</style>
