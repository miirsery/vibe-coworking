<template>
  <div class="base-button">
    <button class="color-white">
      <slot />
    </button>

    <icon-template name="palm" width="16" height="22" />
  </div>
</template>

<style lang="scss" scoped>
.base-button {
  padding: 38px 52px;
}
</style>
