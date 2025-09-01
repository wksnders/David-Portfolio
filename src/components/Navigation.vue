<script setup>
import { RouterLink } from 'vue-router';
import useLocalization from '../composables/useLocalization.js'

const { getTranslationRef, ready } = useLocalization()

const navAbout = getTranslationRef('navigation.about')
const navWriting = getTranslationRef('navigation.writing')
const navTeaching = getTranslationRef('navigation.teaching')
const navEditing = getTranslationRef('navigation.editing')
const navContact = getTranslationRef('navigation.contact')
</script>

<template>
    <nav v-if="ready">
      <RouterLink to="/">{{ navAbout }}</RouterLink>
      <RouterLink to="/#writing">{{ navWriting }}</RouterLink>
      <RouterLink to="/#teaching">{{ navTeaching }}</RouterLink>
      <RouterLink to="/#editing">{{ navEditing }}</RouterLink>
      <RouterLink to="/contact-me">{{ navContact }}</RouterLink>
    </nav>
    <nav v-else>
        Loading ...
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
	color: var(--color-text-accent);
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
