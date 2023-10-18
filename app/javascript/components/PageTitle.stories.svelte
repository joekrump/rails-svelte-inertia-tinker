<script context="module">
  import PageTitle from './PageTitle.svelte';

  export const meta = {
    title: 'Example Page Title',
    component: PageTitle,
    argTypes: {
      children: {
        control: {
          type: 'text',
        },
      },
    },
  };
</script>

<script>
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <PageTitle {...args}></PageTitle>
</Template>

<Story name="With Slotted content">
  <PageTitle>I am a title</PageTitle>
</Story>

<Story name="Default" />
