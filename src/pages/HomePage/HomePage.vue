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
.home-page {
  height: 100%;
}

.hero {
  height: 100%;
  background: $color--black url('/images/static/hero-bg.png') no-repeat;

  &-page {
    height: 100%;
  }
}
</style>
