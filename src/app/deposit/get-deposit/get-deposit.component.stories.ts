import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { GetDepositComponent } from './get-deposit.component';
import { GetDepositModule } from './get-deposit.module';

type ComponentWithCustomControls = GetDepositComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Get Deposit',
  component: GetDepositComponent,
  decorators: [
    moduleMetadata({
      imports: [GetDepositModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `GetDeposit` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const GetDeposit = Template.bind({});
GetDeposit.args = {};
