import { FiEdit2, FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { deleteTask } from "../services/taskApi";

function TaskCard({
  _id,
  title,
  description,
  status,
  priority,
  fetchTasks,
  setSelectedTask,
}) {
  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-700",
    "in-progress": "bg-blue-100 text-blue-700",
    completed: "bg-green-100 text-green-700",
  };

  const priorityStyles = {
    low: "bg-gray-100 text-gray-700",
    medium: "bg-orange-100 text-orange-700",
    high: "bg-red-100 text-red-700",
  };

  const formatStatus = (value) => {
    if (value === "in-progress") return "In Progress";
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const formatPriority = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const handleDelete = async () => {
const result = await Swal.fire({
  title: "Delete Task?",
  text: "This action cannot be undone.",
  icon: "warning",

  background: "#ffffff",

  confirmButtonColor: "#ef4444",
  cancelButtonColor: "#3b82f6",

  confirmButtonText: "Yes, Delete",
  cancelButtonText: "Cancel",

  showCancelButton: true,

  reverseButtons: true,
});

    if (!result.isConfirmed) return;

    try {
      await deleteTask(_id);

      toast.success("Task deleted successfully");

      fetchTasks();
    } catch (error) {
      toast.error("Failed to delete task");

      console.log(error);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300">
      {/* Title + Buttons */}

      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>

          <p className="text-gray-500 mt-2">{description}</p>
        </div>

        <div className="flex gap-2">
          <button
            className="h-10 w-10 rounded-lg bg-blue-50 hover:bg-blue-100 flex items-center justify-center transition"
            onClick={() =>
              setSelectedTask({
                _id,
                title,
                description,
                status,
                priority,
              })
            }
          >
            <FiEdit2 className="text-blue-600" />
          </button>

          <button
            onClick={handleDelete}
            className="h-10 w-10 rounded-lg bg-red-50 hover:bg-red-100 flex items-center justify-center transition"
          >
            <FiTrash2 className="text-red-600" />
          </button>
        </div>
      </div>

      {/* Status + Priority */}

      <div className="flex flex-wrap gap-3 mt-5">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[status]}`}
        >
          {formatStatus(status)}
        </span>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${priorityStyles[priority]}`}
        >
          {formatPriority(priority)}
        </span>
      </div>
    </div>
  );
}

export default TaskCard;
