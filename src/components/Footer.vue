<script setup>
import useLocalization from '@/composables/useLocalization'

const { getTranslationRef,ready} = useLocalization()
const headerText = getTranslationRef('brandPageTitle')
</script>

<template>
    
</template>

<style scoped>
</style>
