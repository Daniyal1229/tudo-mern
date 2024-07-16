import Task from "../models/task.js";

// app.post("/task",
export const addTask = async (req, res, next) => {
    const { name, isCompleted } = req.body;
    if (!name) {
        return res.status(400).json("Please fill all the fields");
    }
    try {
        const newTask = await Task.create({
            name: name
        });
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: "Couldn't create a task", error: error.message });
    }
};

// Get all tasks
// app.get("/task",
export const getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({ message: "Couldn't get tasks", error: error.message });
    }
};

// Update task
// app.put("/task/:id",
export const updateTask = async (req, res, next) => {
    const { id } = req.params;
    const { isCompleted } = req.body;
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, { isCompleted: isCompleted }, { new: true });
        if (!updatedTask) {
            return res.status(404).json("Task not found");
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: "Couldn't update task", error: error.message });
    }
};

// Delete task
// app.delete("/task/:id",
export const deleteTask = async (req, res, next) => {
    const { id } = req.params;
    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json("Task not found");
        }
        res.status(200).json("Task deleted");
    } catch (error) {
        res.status(400).json({ message: "Couldn't delete task", error: error.message });
    }
};

// Get task by ID
// app.get("/task/:id",
export const  getTask = async (req, res, next) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json("Task not found");
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ message: "Couldn't get task", error: error.message });
    }
};