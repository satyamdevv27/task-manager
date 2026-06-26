

import TaskCard from "./TaskCard";

function TaskList({
    tasks,
    loading,
    fetchTasks,
    setSelectedTask,
    filter,
    setFilter,
}) {
  if (loading) {
    return <div className="bg-white rounded-xl shadow p-6">Loading...</div>;
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">All Tasks</h2>

      <select
    value={filter}
    onChange={(e) => {

        const value = e.target.value;

        setFilter(value);

        fetchTasks(value);

    }}
    className="border rounded-lg px-4 py-2"
>
 <option value="">All</option>
<option value="pending">Pending</option>
<option value="in-progress">In Progress</option>
<option value="completed">Completed</option>
        </select>
      </div>

      <div className="space-y-4">
        {tasks.length === 0 ? (
          <p className="text-gray-500">No Tasks Found</p>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task._id}
              {...task}
              fetchTasks={fetchTasks}
              setSelectedTask={setSelectedTask}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;
