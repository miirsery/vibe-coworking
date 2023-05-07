<template>
  <div class="base-input">
    <div class="base-input__wrapper">
      <icon-template name="phone" class="color-white" width="16" height="16" />

      <div class="base-input__inner">
        <input :value="props.modelValue" class="" v-bind="$attrs" @input="handelInput" v-on="$attrs" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconTemplate from '@/components/atoms/Base/BaseIcon/BaseIcon.vue'

type Props = {
  modelValue: string
}

type Emits = {
  (e: 'update:model-value', value: string): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const handelInput = (event: Event): void => {
  const target = event.target as HTMLInputElement

  emits('update:model-value', target.value)
}
</script>

<style lang="scss" scoped>
.base-input {
  &__wrapper {
    border-radius: 7px;
    padding: 20px;
  }

  &__inner {
    @include font(14px, 16px);

    color: $color--gray;
  }
}
</style>
