<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/user">User</RouterLink>
      <RouterLink to="/user/1">User 1</RouterLink>
      <RouterLink to="/user/2">User 2</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss"></style>
