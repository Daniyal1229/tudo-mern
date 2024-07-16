import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete, setEditId, setEditName, editId, editName }) => {
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task._id}
                    task={task}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    setEditId={setEditId}
                    setEditName={setEditName}
                    editId={editId}
                    editName={editName}
                />
            ))}
        </div>
    );
};

export default TaskList;
