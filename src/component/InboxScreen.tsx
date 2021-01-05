import React from "react";
import { TaskList } from "./TaskList";
import "./inboxScreen.css";
export const PureInboxScreen: React.FC<any> = ({ error }) => {
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <i className="fa fa-comment"></i>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <div className="twelve">
          <h1>Task Box</h1>
        </div>
      </nav>
      <div className="taskList">
        <TaskList
          loading={false}
          tasks={[
            { id: "1", title: "Task 1", state: "TASK_INBOX" },
            { id: "2", title: "Task 2", state: "TASK_INBOX" },
            { id: "3", title: "Task 3", state: "TASK_INBOX" },
            { id: "4", title: "Task 4", state: "TASK_INBOX" },
            { id: "5", title: "Task 5", state: "TASK_PINNED" },
            { id: "6", title: "Task 6", state: "TASK_INBOX" },
          ]}
        />
      </div>
    </div>
  );
};
