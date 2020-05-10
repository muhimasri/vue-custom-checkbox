<template>
  <label>
    <input type="checkbox" @change="$emit('input', $event.target.checked)" />
    <span></span>
  </label>
</template>
<script>
export default {
  name: 'c-checkbox',
};
</script>
<style lang="scss">
:root {
  --checkbox-color: grey;
  --checkmark-color: white;
  label {
    position: relative;
  }
  span {
    width: 16px;
    height: 16px;
    border: 1px solid var(--checkbox-color);
    display: inline-block;
    border-radius: 50%;
    transition: all linear 0.3s;

    &:after {
      content: "";
      position: absolute;
      top: -1px;
      left: 6px;
      border-bottom: 2px solid var(--checkmark-color);
      border-right: 2px solid var(--checkmark-color);
      height: 9px;
      width: 4px;
      transform: rotate(45deg);
      visibility: hidden;
    }
  }
  input {
    display: none;
    &:checked ~ span {
      background: var(--checkbox-color);
      &:after {
        visibility: visible;
      }
    }
  }
}
</style>
