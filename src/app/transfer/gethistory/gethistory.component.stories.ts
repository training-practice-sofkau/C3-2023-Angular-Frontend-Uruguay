import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { GethistoryComponent } from './gethistory.component';
import { GethistoryModule } from './gethistory.module';

type ComponentWithCustomControls = GethistoryComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Gethistory',
  component: GethistoryComponent,
  decorators: [
    moduleMetadata({
      imports: [GethistoryModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Gethistory` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Gethistory = Template.bind({});
Gethistory.args = {};
