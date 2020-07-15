<template>
  <section>
      <c-checkbox class="checkbox-2"></c-checkbox>
    </section>
</template>
<script>
import CCheckbox from '../src/components/c-checkbox.vue';

export default {
  components: {
    CCheckbox,
  },
};
</script>
<style lang="scss">
.checkbox-2 {
    --checkbox-color: lightpink;
    --checkmark-color: black;
  }
</style>
