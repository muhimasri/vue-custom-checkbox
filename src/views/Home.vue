<template>
  <main>
    <h2>Custom Checkbox</h2>
    <div>{{ checkedValue }}</div>
    <c-checkbox v-model="checkedValue"></c-checkbox>
    <section>
      <c-checkbox class="checkbox-1"></c-checkbox>
      <c-checkbox class="checkbox-2"></c-checkbox>
      <c-checkbox class="checkbox-3"></c-checkbox>
      <c-checkbox class="checkbox-4"></c-checkbox>
    </section>
  </main>
</template>
<script>
import CCheckbox from '@/components/c-checkbox.vue';
import { ref } from '@vue/composition-api';

export default {
  components: {
    CCheckbox,
  },
  setup() {
    const checkedValue = ref(false);
    return { checkedValue };
  },
};
</script>
<style lang="scss">
:root {
  label {
    margin-right: 5px;
  }
  .checkbox-1 {
    --checkbox-color: gainsboro;
  }
  .checkbox-2 {
    --checkbox-color: lightpink;
    --checkmark-color: black;
  }
  .checkbox-3 {
    --checkbox-color: paleturquoise;
  }
  .checkbox-4 {
    --checkbox-color: greenyellow;
    --checkmark-color: purple;
  }
}
</style>
