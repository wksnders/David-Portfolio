<script setup>
import { RouterLink } from 'vue-router';
import useLocalization from '@/composables/useLocalization'

const { getTranslationRef,ready} = useLocalization()
const headerText = getTranslationRef('brandPageTitle')
</script>

<template>
    <nav>
		<RouterLink to="/">About</RouterLink>
		<RouterLink to="/#writing">Writing</RouterLink>
		<RouterLink to="/#teaching">Teaching</RouterLink>
		<RouterLink to="/#editing">Editing</RouterLink>
		<RouterLink to="/contact-me">Contact</RouterLink>
	</nav>
</template>

<style scoped>
nav {
    vertical-align:middle;
	width: 100%;
    height: 100%;
    font-size: 14px;
    text-align: center;
    margin-top: 1rem;
    z-index: 1;
}
nav a.router-link-exact-active {
	color: var(--color-text-accent-active);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 .3rem;
	border-left: 1px solid var(--color-text-accent);
}

nav a:first-of-type {
	border: 0;
}


@media (min-width: 600px) {
  nav {
	  font-size: 16px;
  }
  nav a {
  	padding: 0 .5rem;
  	border-left: .1rem solid var(--color-text-accent);
  }

}

@media (min-width: 800px) {
	header .nav-wrapper {
    margin: 0 10% 1rem 10%;
  }
  nav {
	  font-size: 20px;
    min-height: 65px;
    margin-top: 2rem;
  }
  nav a {
  	padding: 0 1rem;
  }

}

@media (min-width: 1000px) {
  nav {
	  margin-top: 1.5rem;
	  font-size: 26px;
  }
}
@media (min-width: 1200px) {
  nav {
	  margin-top: 1rem;
	  font-size: 30px;
  }
}
</style>
