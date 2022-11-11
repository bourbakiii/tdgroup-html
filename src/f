<template>
  <button class="check-arrow">
    <svg @click="disabled" class="check-arrow__icon"
         width="16"
         height="9">
      <use xlink:href="@/assets/sprites.svg#check-arrow"></use>
    </svg>
  </button>
</template>
<script setup>
const disabled = () => console.log("disabled");
</script>
<style lang="scss">
.check-arrow {
  transition: $TRANSITION;
  background-color: transparent;
  border: none;
  width: max-content;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  opacity: .75;
  fill: $BLACK;
  *{
    transition: $TRANSITION;
  }
  &.rotate &__icon {
    transform: rotate(180deg);
  }

  &:disabled {
    opacity: .3;
  }

  &:hover:not(&:disabled) {
    opacity: 1;
  }

  &.green {
    fill: $GREEN;
  }

  &.white {
    fill: $IVORY;
  }
}
</style>
