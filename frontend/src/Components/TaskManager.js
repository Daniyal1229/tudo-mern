import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './TaskList';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [name, setName] = useState('');
    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState('');

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name.trim()) {
            try {
                await addTask(name);
                setName('');
            } catch (error) {
                console.error('Error adding task:', error);
            }
        }
    };

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/task/');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const addTask = async (name) => {
        try {
            await axios.post('http://localhost:5000/task/', { name });
            fetchTasks();
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };
    const editTask = async () => {
        try {
            await axios.put(`http://localhost:5000/task/${editId}`, { editName });
            console.log(editId);
            console.log(editName);
            fetchTasks();
            setEditId(null);
            setEditName('');
        } catch (error) {
            console.error('Error editing task:', error);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/task/${id}`);
            fetchTasks();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };


    return (
        <div className="task-manager">
            <header>
                <h1>Task Manager</h1>
            </header>
            <form onSubmit={handleSubmit} className="task-form">
                <input
                    type="text"
                    placeholder="Add new task"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>
            <h1 style={{ color: "orange" }}>Tasks</h1>
            <TaskList 
                tasks={tasks} 
                onEdit={editTask} 
                onDelete={deleteTask} 
                setEditId={setEditId} 
                setEditName={setEditName} 
                editId={editId} 
                editName={editName} 
            />
        </div>
    );
};

export default TaskManager;
