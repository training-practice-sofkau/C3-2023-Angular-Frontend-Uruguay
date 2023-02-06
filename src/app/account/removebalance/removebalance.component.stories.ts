import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { RemovebalanceComponent } from './removebalance.component';
import { RemovebalanceModule } from './removebalance.module';

type ComponentWithCustomControls = RemovebalanceComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Removebalance',
  component: RemovebalanceComponent,
  decorators: [
    moduleMetadata({
      imports: [RemovebalanceModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Removebalance` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Removebalance = Template.bind({});
Removebalance.args = {};
