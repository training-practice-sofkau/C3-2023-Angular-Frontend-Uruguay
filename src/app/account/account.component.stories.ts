import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { AccountComponent } from './account.component';
import { AccountModule } from './account.module';

type ComponentWithCustomControls = AccountComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Account',
  component: AccountComponent,
  decorators: [
    moduleMetadata({
      imports: [AccountModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Account` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Account = Template.bind({});
Account.args = {};
