import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { CreateaccounttypeComponent } from './createaccounttype.component';
import { CreateaccounttypeModule } from './createaccounttype.module';

type ComponentWithCustomControls = CreateaccounttypeComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Createaccounttype',
  component: CreateaccounttypeComponent,
  decorators: [
    moduleMetadata({
      imports: [CreateaccounttypeModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Createaccounttype` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Createaccounttype = Template.bind({});
Createaccounttype.args = {};
