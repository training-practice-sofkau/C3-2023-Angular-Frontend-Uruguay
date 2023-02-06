import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { GetlistofaccountComponent } from './getlistofaccount.component';
import { GetlistofaccountModule } from './getlistofaccount.module';

type ComponentWithCustomControls = GetlistofaccountComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Getlistofaccount',
  component: GetlistofaccountComponent,
  decorators: [
    moduleMetadata({
      imports: [GetlistofaccountModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Getlistofaccount` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Getlistofaccount = Template.bind({});
Getlistofaccount.args = {};
