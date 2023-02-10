import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { ToolbarrComponent } from './toolbarr.component';
import { ToolbarrModule } from './toolbarr.module';

type ComponentWithCustomControls = ToolbarrComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Toolbarr',
  component: ToolbarrComponent,
  decorators: [
    moduleMetadata({
      imports: [ToolbarrModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Toolbarr` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Toolbarr = Template.bind({});
Toolbarr.args = {};
