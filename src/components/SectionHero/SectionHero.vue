<template>
  <section class="section-hero">
    <div class="section-hero__info">
      <div class="w-50">
        <h2 class="mb-26">БЬЮТИ КОВОРКИНГ ДЛЯ <span>ПРИКЛАДНЫХ ЭСТЕТОВ</span> 4 СФЕР</h2>
        <div class="section-hero__text">
          Занимайтесь любимым делом, зарабатывая до <span class="color-pink bold">1 000 000 руб./год</span>, арендуя
          локации в одной из 2 точек сети Vibe Coworking
        </div>

        <form>
          <base-input v-model="phone" placeholder="+7 (___) ___ - __ -__" class="mb-14" />

          <base-button> ЗАБРОНИРОВАТЬ ВРЕМЯ </base-button>
        </form>
      </div>

      <div class="w-50">
        <div class="section-hero__girl-wrapper">
          <div class="section-hero__girl-stat"> лэшмейкер </div>
          <div class="section-hero__girl-stat"> бровист </div>
          <div class="section-hero__girl-stat"> косметолог </div>
          <div class="section-hero__girl-stat"> массажист </div>

          <div class="section-hero__girl-line">
            <base-icon name="line-1" width="61" height="103" />
          </div>
          <div class="section-hero__girl-line">
            <base-icon name="line-2" width="107" height="153" />
          </div>
          <div class="section-hero__girl">
            <img src="images/static/girl.png" />
          </div>
        </div>
      </div>
    </div>

    <hero-conveniences />
  </section>
</template>

<script setup lang="ts">
import BaseInput from '@/components/atoms/Base/BaseInput/BaseInput.vue'
import { ref } from 'vue'
import BaseButton from '@/components/atoms/Base/BaseButton/BaseButton.vue'
import HeroConveniences from '@/components/SectionHero/HeroConveniences/HeroConveniences.vue'
import BaseIcon from '@/components/atoms/Base/BaseIcon/BaseIcon.vue'

const phone = ref('')
</script>

<style lang="scss" scoped>
.section-hero {
  max-width: 1344px;
  margin: 0 auto;

  &__info {
    width: 100%;
    display: flex;
  }

  &__girl {
    &-wrapper {
      position: relative;
    }

    &-line {
      position: absolute;
      color: $color--white;
      z-index: 2;

      &:nth-child(5) {
        top: 0;
        left: 0;
      }

      &:nth-child(6) {
        top: 0;
        right: 0;
      }
    }

    &-stat {
      width: fit-content;
      position: absolute;
      border: double 4px transparent;
      border-radius: 21px;
      background-image: linear-gradient($color--beige_2, $color--beige_2),
        radial-gradient(circle at top left, #c68b61, #f5d6bf);
      background-origin: border-box;
      background-clip: padding-box, border-box;
      padding: 10px 20px;

      &:nth-child(1) {
        top: 0;
        left: 0;
      }

      &:nth-child(2) {
        top: 0;
        right: 0;
      }

      &:nth-child(3) {
        left: 0;
        bottom: 0;
      }

      &:nth-child(4) {
        right: 0;
        bottom: 0;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__text {
    @include font(18px, 26px);

    color: $color--white;
    margin-bottom: 70px;
  }
}
</style>
