import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { DeleteAccountComponent } from './delete-account.component';
import { DeleteAccountModule } from './delete-account.module';

type ComponentWithCustomControls = DeleteAccountComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Delete Account',
  component: DeleteAccountComponent,
  decorators: [
    moduleMetadata({
      imports: [DeleteAccountModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `DeleteAccount` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const DeleteAccount = Template.bind({});
DeleteAccount.args = {};
