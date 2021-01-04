import React from "react";
// import PropTypes from "prop-types";
export interface tskinterface {
  state: string;
  id?: string | undefined;
  title?: string | undefined;
}
export interface allTask {
  task: tskinterface;
  onArchiveTask: (id?: string | undefined) => void;
  onPinTask: (id?: string | undefined) => void;
}

export const Task: React.FC<allTask> = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={() => {
            onArchiveTask(id);
          }}
        />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {state !== "TASK_ARCHIVED" && (
          <a
            onClick={() => {
              onPinTask(id);
            }}
          >
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};
