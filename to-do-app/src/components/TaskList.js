
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasksSlice";

function TaskList() {
    const tasks = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();

    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <span>{task.name}</span>
                    <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default TaskList;
    