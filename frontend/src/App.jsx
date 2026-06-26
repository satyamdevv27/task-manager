import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import API from "./services/taskApi";
import { getTasks } from "./services/taskApi";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState(null);
  const [scrollToTaskId, setScrollToTaskId] = useState(null);
  const [filter, setFilter] = useState("");

  const fetchTasks = async (status = "") => {
    try {
      setLoading(true);

      const data = await getTasks(status);

      setTasks(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">📋 Task Manager</h1>

        <TaskForm
          fetchTasks={fetchTasks}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
          setScrollToTaskId={setScrollToTaskId}
        />

        <div className="mt-8">
          <TaskList
            tasks={tasks}
            loading={loading}
            fetchTasks={fetchTasks}
            setSelectedTask={setSelectedTask}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
