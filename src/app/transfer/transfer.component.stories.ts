import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { TransferComponent } from './transfer.component';
import { TransferModule } from './transfer.module';

type ComponentWithCustomControls = TransferComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Transfer',
  component: TransferComponent,
  decorators: [
    moduleMetadata({
      imports: [TransferModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Transfer` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Transfer = Template.bind({});
Transfer.args = {};
