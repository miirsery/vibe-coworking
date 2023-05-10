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
          <div id="stat-1" class="section-hero__girl-stat"> лэшмейкер </div>
          <div id="stat-2" class="section-hero__girl-stat"> бровист </div>
          <div id="stat-3" class="section-hero__girl-stat"> косметолог </div>
          <div id="stat-4" class="section-hero__girl-stat"> массажист </div>

          <div class="section-hero__girl-line">
            <svg width="62" height="104" viewBox="0 0 62 104" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="57.5" cy="99.5" r="4.5" fill="white" />
              <path id="line-1" d="M58 101L1 1" stroke="white" stroke-dasharray="3" />
              <circle cx="57.5" cy="99.5" r="2.5" fill="#C5988F" />
            </svg>
          </div>
          <div class="section-hero__girl-line">
            <svg width="108" height="154" viewBox="0 0 108 154" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="line-2" d="M5 149L107.5 1" stroke="white" stroke-dasharray="3" />
              <circle cx="4.5" cy="149.5" r="4.5" fill="white" />
              <circle cx="4.5" cy="149.5" r="2.5" fill="#C5988F" />
            </svg>
          </div>
          <div class="section-hero__girl-line">
            <svg width="106" height="134" viewBox="0 0 106 134" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="101.5" cy="4.5" r="4.5" fill="white" />
              <path id="line-3" d="M0.5 133.5L101.5 4.5" stroke="white" stroke-dasharray="3" />
              <circle cx="101.5" cy="4.5" r="2.5" fill="#C5988F" />
            </svg>
          </div>
          <div class="section-hero__girl-line">
            <svg width="86" height="121" viewBox="0 0 86 121" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="line-4" ref="lineFour" d="M85 120L5 5" stroke="white" stroke-dasharray="3" />
              <circle cx="4.5" cy="4.5" r="4.5" fill="white" />
              <circle cx="4.5" cy="4.5" r="2.5" fill="#C5988F" />
            </svg>
          </div>
          <div id="hero-girl" class="section-hero__girl">
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
import { onMounted, ref } from 'vue'
import BaseButton from '@/components/atoms/Base/BaseButton/BaseButton.vue'
import HeroConveniences from '@/components/SectionHero/HeroConveniences/HeroConveniences.vue'
import gsap from 'gsap'

const phone = ref('')
const lineFour = ref()

gsap.registerPlugin(DrawSVGPlugin)

onMounted(() => {
  gsap.fromTo('#hero-girl', { opacity: 0, y: 100, scale: 0.9 }, { opacity: 1, y: 1, duration: 1, scale: 1 })

  gsap.defaults({
    strokeDasharray: '0 3',
  })

  gsap.fromTo(
    'stat-1',
    {
      duration: 1.5,
      ease: 'power4.inOut',
      scale: 0,
    },
    {
      duration: 1.5,
      ease: 'power4.inOut',
      scale: 1,
    }
  )

  gsap.from('#line-1', {
    duration: 1.5,
    ease: 'power4.inOut',
  })

  gsap.from('#line-2', {
    duration: 1.5,
    ease: 'power4.inOut',
  })

  gsap.from('#line-3', {
    duration: 1.5,
    ease: 'power4.inOut',
  })

  gsap.from('#line-4', {
    duration: 1.5,
    ease: 'power4.inOut',
  })
})
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
