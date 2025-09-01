<script setup>
import { RouterView } from 'vue-router';
import myHeader from './components/Header.vue';
import myFooter from './components/Footer.vue';
import Navigation from './components/Navigation.vue';
</script>

<template>
	<header>
		<Navigation/>
    <myHeader></myHeader>
	</header>

	<RouterView />

  <myFooter></myFooter>
</template>

<style scoped>

header {
	line-height: 1.5;
	max-height: 100vh;
}
	
</style>