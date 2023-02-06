import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { DeleteComponent } from './delete.component';
import { DeleteModule } from './delete.module';

type ComponentWithCustomControls = DeleteComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Delete',
  component: DeleteComponent,
  decorators: [
    moduleMetadata({
      imports: [DeleteModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Delete` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Delete = Template.bind({});
Delete.args = {};
