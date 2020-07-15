import CCheckbox from '../src/components/c-checkbox';

export default {
  title: 'Checkbox',
  component: CCheckbox,
};

export const Check1 = () => ({
  components: { CCheckbox },
  template: '<c-checkbox></c-checkbox>'
});

export const Check2 = () => ({
  components: { CCheckbox },
  template: '<c-checkbox></c-checkbox>'
});

// ToStorybook.story = {
//   name: 'to Storybook',
// };
