import React from "react";

import Message from "../src";

export default {
  title: "Message",
  component: Message,
};

const Template = (args) => <Message {...args} />;

export const SimpleLabel = Template.bind({});
SimpleLabel.args = {
  label: "Hello, world",
};
