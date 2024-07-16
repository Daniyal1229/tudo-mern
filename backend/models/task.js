import mongoose from "mongoose";


// Schema
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
});

// Collection
const Task = mongoose.model("Task", taskSchema);


export default Task;
