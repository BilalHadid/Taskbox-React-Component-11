import React from "react";
import "./Task.css";

export interface tskinterface {
  state: string;
  id?: string | undefined;
  title?: string | undefined;
}
export interface allTask {
  task: tskinterface;
  onArchiveTask: (task: tskinterface) => void;
  onPinTask: (task: tskinterface) => void;
}

export const Task: React.FC<allTask> = ({ task, onArchiveTask, onPinTask }) => {
  return (
    <div className={`list-item ${task.state}`} style={{ display: "flex" }}>
      <label
        className="checkbox"
        onClick={() => {
          onArchiveTask(task);
        }}
      >
        <input
          type="checkbox"
          defaultChecked={task.state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span style={{ cursor: "pointer" }} className="checkbox-custom" />
      </label>
      <div className="title">
        <input
          type="text"
          value={task.title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div
        className="actions"
        onClick={(event) => event.stopPropagation()}
        style={{ marginLeft: "10%" }}
      >
        {task.state !== "TASK_ARCHIVED" && (
          <a
            onClick={() => onPinTask(task)}
            style={{ cursor: "pointer", fontSize: "25px" }}
          >
            <span
              style={
                task.state === "TASK_PINNED"
                  ? { color: "orange" }
                  : { color: "gray" }
              }
            >
              ✯
            </span>
          </a>
        )}
      </div>
    </div>
  );
};
