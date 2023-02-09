import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { AlertsComponent } from './alerts.component';
import { AlertsModule } from './alerts.module';

type ComponentWithCustomControls = AlertsComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Alerts',
  component: AlertsComponent,
  decorators: [
    moduleMetadata({
      imports: [AlertsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Alerts` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Alerts = Template.bind({});
Alerts.args = {};
