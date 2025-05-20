import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  {useNavigate}   from "react-router-dom"



const Tasks = () => {
  const [tasks, setTasks] = useState([]);

    const navigate = useNavigate();


  const fetchTasks = async () => {
    try {
      const response = await axios.get("/api/fetchtasks");
      setTasks(response?.data?.allTasks || []);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete("http://localhost:8080/api/deletetask", {
        data: { id },
      });
      if (response) {
        alert("Task deleted successfully");
        fetchTasks();
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const handleToggleStatus = async (id) => {
    try {
      const response = await axios.put("http://localhost:8080/api/updatetask", {
        id,
      });
      if (response) {
        alert("Task status updated");
        fetchTasks();
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="task-container">

<button onClick={()=> navigate("/") }>Add New</button>
      <h3>View Tasks</h3>

         {
           tasks.length === 0 ? <h3>No tasks found</h3> :   <div className="taskheader">
           <h6>Title</h6>
           <h6>Description</h6>
           <h6>Status</h6>
           <h6>Actions</h6>
         </div>
         }

      <div className="tasklist">
        {tasks.length === 0 ? (
          <div className="notasks">No tasks found.</div>
        ) : (
          tasks.map((task) => (
            <div className="alltasks" key={task._id}>
              <h6>{task.title}</h6>
              <h6>{task.description.trim()}</h6>
              <h6 className={task.completedStatus ? 'completed' : 'pending'}>
                {task.completedStatus ? "Completed" : "New added"}
              </h6>
              <div className="buttons">
                <button onClick={() => handleDelete(task._id)}>Delete</button>
                <button id="completed" onClick={() => handleToggleStatus(task._id)}>
                  Mark as {task.completedStatus ? "Pending" : "Completed"}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Tasks;

