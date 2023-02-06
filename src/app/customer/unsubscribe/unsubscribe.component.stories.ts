import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { UnsubscribeComponent } from './unsubscribe.component';
import { UnsubscribeModule } from './unsubscribe.module';

type ComponentWithCustomControls = UnsubscribeComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Unsubscribe',
  component: UnsubscribeComponent,
  decorators: [
    moduleMetadata({
      imports: [UnsubscribeModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Unsubscribe` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Unsubscribe = Template.bind({});
Unsubscribe.args = {};
