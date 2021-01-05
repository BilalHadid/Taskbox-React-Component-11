import React from "react";
// import { allTask } from "../component/Task";
import { Task } from "../component/Task";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  component: Task,
  title: "Task",
} as Meta;

interface tskinterface {
  state: string;
  id?: string | undefined;
  title?: string | undefined;
  updatedAt?: Date;
}
interface allTask {
  task: tskinterface;
  onArchiveTask: (task: tskinterface) => void;
  onPinTask: (task: tskinterface) => void;
}

const Template: Story<allTask> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
