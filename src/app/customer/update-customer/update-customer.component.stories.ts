import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { UpdateCustomerComponent } from './update-customer.component';
import { UpdateCustomerModule } from './update-customer.module';

type ComponentWithCustomControls = UpdateCustomerComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Update Customer',
  component: UpdateCustomerComponent,
  decorators: [
    moduleMetadata({
      imports: [UpdateCustomerModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `UpdateCustomer` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const UpdateCustomer = Template.bind({});
UpdateCustomer.args = {};
