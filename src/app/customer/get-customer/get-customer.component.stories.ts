import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { GetCustomerComponent } from './get-customer.component';
import { GetCustomerModule } from './get-customer.module';

type ComponentWithCustomControls = GetCustomerComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Get Customer',
  component: GetCustomerComponent,
  decorators: [
    moduleMetadata({
      imports: [GetCustomerModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `GetCustomer` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const GetCustomer = Template.bind({});
GetCustomer.args = {};
