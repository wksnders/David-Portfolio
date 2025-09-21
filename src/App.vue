<script setup>
import { RouterView } from 'vue-router';
import myHeader from './components/Header.vue';
import myFooter from './components/Footer.vue';
import Navigation from './components/Navigation.vue';
import LanguageSelect from './components/LanguageSelect.vue';
</script>

<template>
	<header>
		<Navigation/>
    	<myHeader></myHeader>
		<LanguageSelect/>
	</header>

	<RouterView />

  <myFooter></myFooter>
</template>

<style scoped>

header {
	position: relative;
	line-height: 1.5;
	max-height: 100vh;
}
	
</style>