import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { GetbalanceComponent } from './getbalance.component';
import { GetbalanceModule } from './getbalance.module';

type ComponentWithCustomControls = GetbalanceComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Getbalance',
  component: GetbalanceComponent,
  decorators: [
    moduleMetadata({
      imports: [GetbalanceModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Getbalance` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Getbalance = Template.bind({});
Getbalance.args = {};
