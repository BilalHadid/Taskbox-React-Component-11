import React from "react";

import { Task, tskinterface } from "./Task";
import "./TaskList.css";
// interface TasksType {
//   id: string;
//   title: string;
//   state?: string;
// }
interface tasker {
  tasks: tskinterface[];
  loading: boolean;
}

export const TaskList: React.FC<tasker> = ({ loading, tasks }) => {
  const [taskItems, setTaskItem] = React.useState<tskinterface[]>(tasks);
  const onPinTask = React.useCallback(
    (tasks: tskinterface) => {
      const filteredList = taskItems.filter((item) => item.id !== tasks.id);
      let newTask: tskinterface = {
        id: tasks.id,
        title: tasks.title,
        state: tasks.state === "TASK_PINNED" ? "TASK_INBOXED" : "TASK_PINNED",
      };
      setTaskItem([...filteredList, newTask]);
    },
    [taskItems]
  );

  const onArchiveTask = React.useCallback(
    (tasks: tskinterface) => {
      const filteredList = taskItems.filter((item) => item.id !== tasks.id);
      setTaskItem(filteredList);
    },
    [taskItems]
  );

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (taskItems.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div
            style={{
              display: "block",
              textAlign: "center",
              flex: "1",
              fontFamily: "serif",
            }}
          >
            <div className="checktick">✔</div>
            <div className="title-message">You have no tasks</div>

            <div className="subtitle-message">Sit back and relax</div>
          </div>
        </div>
      </div>
    );
  }
  const tasksInOrder = [
    ...taskItems.filter((t) => t.state === "TASK_PINNED"),
    ...taskItems.filter((t) => t.state !== "TASK_PINNED"),
  ];
  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        <Task
          key={task.id}
          task={task}
          onPinTask={onPinTask}
          onArchiveTask={onArchiveTask}
        />
      ))}
    </div>
  );
};
