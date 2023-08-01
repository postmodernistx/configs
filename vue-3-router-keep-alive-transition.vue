<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
const route = useRoute();

// @see https://vuejs.org/guide/built-ins/keep-alive.html
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <keep-alive :max="10"> <!-- keep-alive to go inside transition! Use keep-alive in DOM templates, instead of KeepAlive. Cache max 10 instances. -->
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
