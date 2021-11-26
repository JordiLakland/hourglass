import './App.css';
import { useState } from 'react';
import Row from './components/Row';
import { projectsData, tasksData } from './data/hourglassData';

function App() {

  const [projects, setProjects] = useState(projectsData);
  const [tasks, setTasks] = useState(tasksData);

  const handleAddProject = (newProject) => {
    projects.push(newProject);
    setProjects(projects);
  }

  const handleAddTask = (newTask) => {
    tasks.push(newTask);
    setTasks(tasks);
  }

  return (
    <div className="App">
      <header className="App-header">
        HourGlass APP
      </header>
      <div className="main-content">
        <Row data={projects} addItem={handleAddProject} role={"project"} />
        <Row data={tasks} addItem={handleAddTask} role={"task"} />
      </div>
    </div>
  );
}

export default App;
