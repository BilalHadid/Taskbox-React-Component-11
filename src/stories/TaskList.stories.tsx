import React from "react";

import { TaskList } from "../component/TaskList";
// import * as TaskStories from "./Task.stories";
import { Story, Meta } from "@storybook/react/types-6-0";

interface Tasks {
  id: string;
  title: string;
  state?: string;
  updatedAt?: Date | undefined;
}
interface tasker {
  loading: boolean;
  tasks?: Tasks[] | undefined;
  onPinTask: (id?: string | undefined) => void;
  onArchiveTask: (id?: string | undefined) => void;
}

export default {
  component: TaskList,
  title: "TaskList",
} as Meta;

const Template: Story<tasker> = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { id: "1", title: "Task 1", state: "TASK_INBOX" },
    { id: "2", title: "Task 2", state: "TASK_INBOX" },
    { id: "3", title: "Task 3", state: "TASK_INBOX" },
    { id: "4", title: "Task 4", state: "TASK_INBOX" },
    { id: "5", title: "Task 5", state: "TASK_INBOX" },
    { id: "6", title: "Task 6", state: "TASK_INBOX" },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    // ...Default.args.tasks.slice(0, 5),
    { id: "1", title: "Task 1", state: "TASK_INBOX" },
    { id: "2", title: "Task 2", state: "TASK_INBOX" },
    { id: "3", title: "Task 3", state: "TASK_INBOX" },
    { id: "4", title: "Task 4", state: "TASK_INBOX" },
    { id: "5", title: "Task 5", state: "TASK_INBOX" },
    { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};
