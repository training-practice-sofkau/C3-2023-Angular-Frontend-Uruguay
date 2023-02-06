import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { NewdepositComponent } from './newdeposit.component';
import { NewdepositModule } from './newdeposit.module';

type ComponentWithCustomControls = NewdepositComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Newdeposit',
  component: NewdepositComponent,
  decorators: [
    moduleMetadata({
      imports: [NewdepositModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Newdeposit` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Newdeposit = Template.bind({});
Newdeposit.args = {};
