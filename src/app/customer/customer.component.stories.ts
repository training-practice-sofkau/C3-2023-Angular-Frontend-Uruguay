import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { CustomerComponent } from './customer.component';
import { CustomerModule } from './customer.module';

type ComponentWithCustomControls = CustomerComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Customer',
  component: CustomerComponent,
  decorators: [
    moduleMetadata({
      imports: [CustomerModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Customer` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Customer = Template.bind({});
Customer.args = {};
