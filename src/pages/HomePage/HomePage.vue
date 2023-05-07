<template>
  <div class="home-page">
    <div class="hero">
      <base-header />

      <section-hero />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseHeader from '@/components/Base/BaseHeader/BaseHeader.vue'
import SectionHero from '@/components/SectionHero/SectionHero.vue'
</script>

<style lang="scss" scoped>
.hero {
  background-color: #363348;
}
</style>
