<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
  <header class="abc">
        <RouterLink to="/">State Management</RouterLink>
        <RouterLink to="/posts">Cred</RouterLink>
        <RouterLink to="/user-list">Pagination</RouterLink>
        <RouterLink to="/product-list">Product list</RouterLink>
  </header>

  <RouterView />

  <footer class="abc">
    <RouterLink to="/">State Management</RouterLink>
    <RouterLink to="/posts">Cred</RouterLink>
    <RouterLink to="/user-list">Pagination</RouterLink>
    <RouterLink to="/product-list">Product list</RouterLink>
  </footer>

</template>
<style scoped>

.abc {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

.abc a.router-link-exact-active {
  color: var(--color-text);
}

.abc a.router-link-exact-active:hover {
  background-color: transparent;
}

.abc a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.abc a:first-of-type {
  border: 0;
}

</style>
