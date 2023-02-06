import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { NewTransferComponent } from './new-transfer.component';
import { NewTransferModule } from './new-transfer.module';

type ComponentWithCustomControls = NewTransferComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/New Transfer',
  component: NewTransferComponent,
  decorators: [
    moduleMetadata({
      imports: [NewTransferModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `NewTransfer` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const NewTransfer = Template.bind({});
NewTransfer.args = {};
