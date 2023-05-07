<template>
  <section class="section-hero">
    <div class="w-50">
      <h2 class="mb-26">БЬЮТИ КОВОРКИНГ ДЛЯ <span>ПРИКЛАДНЫХ ЭСТЕТОВ</span> 4 СФЕР</h2>
      <div class="section-hero__text">
        Занимайтесь любимым делом, зарабатывая до <span class="color-pink bold">1 000 000 руб./год</span>, арендуя
        локации в одной из 2 точек сети Vibe Coworking
      </div>

      <form>
        <base-input v-model="phone" placeholder="+7 (___) ___ - __ -__" />

        <base-button> ЗАБРОНИРОВАТЬ ВРЕМЯ </base-button>
      </form>
    </div>

    <div class="w-50">
      <img src="images/static/girl.png" />
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseInput from '@/components/atoms/Base/BaseInput/BaseInput.vue'
import { ref } from 'vue'
import BaseButton from '@/components/atoms/Base/BaseButton/BaseButton.vue'

const phone = ref('')
</script>

<style lang="scss" scoped>
.section-hero {
  display: flex;

  &__text {
    @include font(18px, 26px);
  }
}
</style>
