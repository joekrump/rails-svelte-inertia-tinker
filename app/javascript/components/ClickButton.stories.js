import ClickButton from './ClickButton.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'Example/ClickButton',
  component: ClickButton,
  argTypes: {
    count: { control: 'number' },
  },
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
  Component: ClickButton,
  props: args,
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Default = Template.bind({});
