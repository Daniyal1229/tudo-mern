import React from 'react';

const TaskItem = ({ task, onEdit, onDelete, setEditId, setEditName, editId, editName }) => {
    // Debugging logs
    console.log('TaskItem render:', task);

    if (!task) {
        return null; 
    }
console.log(editName);

    const handleEditClick = () => {
        setEditId(task._id);
        setEditName(task.name);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        if (editName.trim()) {
            onEdit({ name: editName, _id: task._id });
        }
    };

    return (
        <div className="task-item">
            {editId === task._id ? (
                <form onSubmit={handleEditSubmit} className="edit-form">
                    <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                    />
                    <button type="submit">Save</button>
                </form>
            ) : (
                <>
                    <span>{task.name}</span>
                    <div className="btns">
                        <button onClick={handleEditClick}>Edit</button>
                        <button onClick={() => onDelete(task._id)}>Delete</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default TaskItem;
