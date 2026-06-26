import { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import { createTask, updateTask } from "../services/taskApi";

function TaskForm({ fetchTasks, selectedTask, setSelectedTask }) {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "medium",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (selectedTask) {
        await updateTask(selectedTask._id, formData);

        toast.success("Task updated successfully");

        setSelectedTask(null);
      } else {
        await createTask(formData);

        toast.success("Task created successfully");
      }

      setFormData({
        title: "",
        description: "",
        status: "pending",
        priority: "medium",
      });

      fetchTasks();
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (selectedTask) {
      setFormData({
        title: selectedTask.title,
        description: selectedTask.description,
        status: selectedTask.status,
        priority: selectedTask.priority,
      });

      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedTask]);

  return (
    <div
      className="bg-white rounded-xl shadow p-6"
      ref={formRef}
    //   id={`task-${_id}`}
    >
      <h2 className="text-2xl font-semibold mb-6">
        {selectedTask ? "✏️ Edit Task" : "➕ Create Task"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-2 font-medium">Title</label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter task title"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Description</label>

          <textarea
            rows="4"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter task description"
            className="w-full border rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-2 font-medium">Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Priority</label>

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400"
        >
          {loading ? "Saving..." : selectedTask ? "Update Task" : "+ Add Task"}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
