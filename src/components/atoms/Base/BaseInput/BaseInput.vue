<template>
  <div class="base-input">
    <div class="base-input__wrapper">
      <div class="base-input__icon">
        <icon-template name="phone" class="color-white" width="16" height="16" />
      </div>

      <div class="divider" />

      <div class="base-input__inner">
        <input :value="props.modelValue" :placeholder="props.placeholder" @input="handelInput" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconTemplate from '@/components/atoms/Base/BaseIcon/BaseIcon.vue'

type Props = {
  modelValue: string
  placeholder?: string
}

type Emits = {
  (e: 'update:model-value', value: string): void
}

const emits = defineEmits<Emits>()
const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
})

const handelInput = (event: Event): void => {
  const target = event.target as HTMLInputElement

  emits('update:model-value', target.value)
}
</script>

<style lang="scss" scoped>
.base-input {
  &__wrapper {
    width: fit-content;
    display: flex;
    align-items: center;
    border-radius: 7px;
    background-color: $color--white;
    padding: 20px;
  }

  &__icon {
    width: 32px;
    height: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: linear-gradient(131.39deg, #ebbe9d 13.55%, #dfab86 80.5%);

    .base-icon {
      width: 24px;
      height: 24px;
    }
  }

  &__inner {
    @include font(14px, 16px);

    &::placeholder {
      color: $color--gray;
    }
  }
}

.divider {
  width: 1px;
  height: 24px;
  background-color: #f0f0f0;
  margin: 0 24px 0 12px;
}
</style>
