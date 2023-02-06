import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { AddbalanceComponent } from './addbalance.component';
import { AddbalanceModule } from './addbalance.module';

type ComponentWithCustomControls = AddbalanceComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Addbalance',
  component: AddbalanceComponent,
  decorators: [
    moduleMetadata({
      imports: [AddbalanceModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Addbalance` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Addbalance = Template.bind({});
Addbalance.args = {};
