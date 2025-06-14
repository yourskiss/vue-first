<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
  <header class="header">
        <RouterLink to="/">State Management</RouterLink>
        <RouterLink to="/posts">Cred</RouterLink>
        <RouterLink to="/user-list">User Pagination</RouterLink>
        <RouterLink to="/product-list">Product Paging</RouterLink>
  </header>


  <RouterView />

  <footer class="footer">
    <RouterLink to="/">State Management</RouterLink>
    <RouterLink to="/posts">Cred</RouterLink>
    <RouterLink to="/user-list">User Pagination</RouterLink>
    <RouterLink to="/product-list">Product Paging</RouterLink>
  </footer>

</template>
<style scoped>

.header, .footer {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

.header a.router-link-exact-active, .footer a.router-link-exact-active {
  color: var(--color-text);
}

.header a.router-link-exact-active:hover, .footer a.router-link-exact-active:hover {
  background-color: transparent;
}

.header a, .footer a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.header a:first-of-type, .footer a:first-of-type {
  border: 0;
}

</style>
