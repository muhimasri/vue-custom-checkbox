<template>
  <section>
      <c-checkbox class="checkbox-1"></c-checkbox>
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
.checkbox-1 {
    --checkbox-color: gainsboro;
  }
</style>
