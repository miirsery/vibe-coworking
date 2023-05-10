<template>
  <section class="section-hero">
    <div class="section-hero__info-wrapper">
      <div class="section-hero__info">
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

      <div class="section-hero__girl-content">
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
          <div class="section-hero__girl-line">
            <base-icon name="line-3" width="105" height="133" />
          </div>
          <div class="section-hero__girl-line">
            <base-icon name="line-4" width="85" height="120" />
          </div>
          <div class="section-hero__girl">
            <img src="images/static/girl-v1.png" />
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
    width: 40%;

    &-wrapper {
      width: 100%;
      display: flex;
    }
  }

  &__girl {
    top: -158px;
    left: -40px;
    position: absolute;
    z-index: 1;

    &-content {
      width: 60%;
    }

    &-wrapper {
      height: 100%;
      position: relative;
    }

    &-line {
      position: absolute;
      color: $color--white;
      z-index: 2;

      &:nth-child(5) {
        top: 125px;
        left: 315px;
      }

      &:nth-child(6) {
        top: 50px;
        right: 210px;
      }

      &:nth-child(7) {
        left: 340px;
        bottom: -100px;
      }

      &:nth-child(8) {
        right: 250px;
        bottom: 30px;
      }
    }

    &-stat {
      width: fit-content;
      position: absolute;
      border: double 4px transparent;
      border-radius: 21px;
      background-image: linear-gradient(#edd5d0, #edd5d0), radial-gradient(circle at 104px 0, #c68b61, #f5d6bf);
      background-origin: border-box;
      background-clip: padding-box, border-box;
      padding: 10px 20px;
      z-index: 3;

      &:nth-child(1) {
        top: 105px;
        left: 185px;
      }

      &:nth-child(2) {
        top: 35px;
        right: 105px;
      }

      &:nth-child(3) {
        left: 210px;
        bottom: -110px;
      }

      &:nth-child(4) {
        right: 126px;
        bottom: 20px;
      }
    }
  }

  &__text {
    @include font(18px, 26px);

    color: $color--white;
    margin-bottom: 70px;
  }
}
</style>
