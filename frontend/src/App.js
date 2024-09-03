import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProjectPage from './pages/ProjectPage';
import TaskPage from './pages/TaskPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/:id/tasks" element={<TaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;
