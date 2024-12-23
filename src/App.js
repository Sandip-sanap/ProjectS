import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './component/TodoList';
import TodoForm from './component/TododForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/" element={<TodoForm />} />
        {/* Add other routes here (e.g., About page) */}
      </Routes>
    </Router>
  );
}

export default App;