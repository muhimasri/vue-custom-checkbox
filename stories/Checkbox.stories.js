import CheckboxPrimary from './CheckboxPrimary.vue';
import CheckboxSecondary from './CheckboxSecondary.vue';

export default {
  title: 'Checkbox'
};

export const Primary = () => ({
  components: { CheckboxPrimary },
  template: '<CheckboxPrimary></CheckboxPrimary>'
});

export const Secondary = () => ({
  components: { CheckboxSecondary },
  template: '<CheckboxSecondary></CheckboxSecondary>'
});
