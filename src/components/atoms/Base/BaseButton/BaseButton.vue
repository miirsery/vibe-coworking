<template>
  <div class="base-button">
    <div class="base-button__wrapper">
      <button class="base-button__inner">
        <slot />
      </button>

      <base-icon name="palm" width="16" height="22" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-button {
  width: fit-content;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    left: 0;
    right: 0;
    bottom: -5px;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 12px;
    background-color: #b98766;
    margin: 0 auto;
    z-index: 1;
  }

  &__inner {
    color: $color--white;
    cursor: pointer;
    margin-right: 20px;
  }

  &__wrapper {
    width: fit-content;
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 12px;
    box-shadow: inset 0 0 12px #e5b79a;
    background: linear-gradient(314.24deg, #c88c61 25.11%, #ebbe9c 88.64%);
    padding: 38px 52px;
    z-index: 2;
  }
}
</style>
