import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { DepositComponent } from './deposit.component';
import { DepositModule } from './deposit.module';

type ComponentWithCustomControls = DepositComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Deposit',
  component: DepositComponent,
  decorators: [
    moduleMetadata({
      imports: [DepositModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Deposit` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Deposit = Template.bind({});
Deposit.args = {};
