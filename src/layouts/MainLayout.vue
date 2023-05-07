<template>
  <div class="main-layout">
    <div class="main-layout__content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__content {
    width: 100%;
    height: 100%;
    @include responsive(xs, $breakpoints-only-max) {
      padding: 0 10px 40px;
    }
  }

  &__container {
    width: 100%;
    height: fit-content;
    max-width: 1016px;

    @include responsive(sm, $breakpoints-only-max) {
      max-width: 620px;
    }

    @include responsive(xs, $breakpoints-only-max) {
      max-width: 355px;
    }
  }

  @include responsive(xs) {
    height: calc(100% - 60px);
  }

  @include responsive(xs) {
    flex-direction: column-reverse;
  }
}
</style>
