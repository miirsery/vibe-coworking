<template>
  <header class="base-header">
    <div class="base-header__left">
      <base-icon name="logo" width="100" height="31" class="mr-25" />

      <div class="divider" />

      <p class="color-white">
        Бьюти коворкинг в Mоскве <br />
        подпись две строки
      </p>
    </div>
    <nav>
      <ul class="d-f ai-c">
        <li class="mr-32">
          <router-link to="#about"> О нас </router-link>
        </li>
        <li class="mr-32">
          <router-link to="#prices"> Цены </router-link>
        </li>
        <li class="mr-32">
          <router-link to="#booking"> Забронировать </router-link>
        </li>
        <li class="mr-32">
          <router-link to="#contacts"> Контакты </router-link>
        </li>
      </ul>
    </nav>

    <div class="d-f ai-c">
      <base-icon name="phone" width="14" height="14" />

      <div> +7 (654) 876 09 09 </div>
      <div> Обратный звонок </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.base-header {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 17px;
  margin-bottom: 100px;

  &__left {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .divider {
    width: 1px;
    height: 100%;
    margin: 0 25px;
  }
}
</style>
