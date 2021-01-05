import React from "react";

import { PureInboxScreen } from "../component/InboxScreen";

import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  component: PureInboxScreen,
  title: "InboxScreen",
} as Meta;

const Template: Story<any> = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something",
};
