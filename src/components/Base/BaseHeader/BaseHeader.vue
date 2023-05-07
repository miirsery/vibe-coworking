<template>
  <header class="base-header">
    <div class="base-header__logo">
      <base-icon name="logo" width="100" height="31" class="mr-25" />

      <div class="divider" />

      <p class="color-white">
        Бьюти коворкинг в Mоскве <br />
        подпись две строки
      </p>
    </div>
    <nav>
      <ul class="d-f ai-c">
        <li class="mr-32 base-header__menu-item active">
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

    <div class="base-header__contacts">
      <a href="tel:+76548760909" class="base-header__contacts-phone-number"> +7 (654) 876 09 09 </a>
      <div class="base-header__contacts-phone">
        <base-icon name="phone" width="28" height="28" />

        <div class="d-f fd-c">
          <div class="base-header__contacts-phone-text"> Обратный звонок </div>
          <hr class="base-header__contacts-phone-text__gradient" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.base-header {
  height: 56px;
  max-width: 1500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 15px 0;
  margin: 0 auto 100px;

  &__menu {
    &-item {
      &.active {
        position: relative;

        &::after {
          content: '';
          left: 50%;
          bottom: -15px;
          width: 20px;
          height: 1px;
          position: absolute;
          background-color: $color--beige_3;
          transform: translateX(-50%);
        }
      }
    }
  }

  &__contacts {
    height: 30px;
    display: flex;
    align-items: center;
    color: $color--white;

    &-phone {
      display: flex;
      align-items: center;

      > div {
        height: 30px;
      }

      &-text {
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;
        background: linear-gradient(119.36deg, #e9bc9b 0%, #cc936b 74.87%);
        -webkit-background-clip: text;
        background-clip: text;

        &__gradient {
          width: 100%;
          height: 1px;
          border: none;
          background-image: linear-gradient(90deg, transparent, transparent 50%, $color--text 50%, $color--text 100%),
            linear-gradient(90deg, #e9c6a4, #ce946b);
          background-size: 12px 3px, 100% 3px;
          margin-top: 2px;
        }
      }

      .base-icon {
        margin-right: 10px;
      }

      &-number {
        font-weight: 700;
        margin-right: 30px;
      }
    }
  }

  &__logo {
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
