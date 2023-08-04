import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TaskList } from "./pages/TaskList";
import { TaskForm } from "./pages/TaskForm";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto p-10">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/tasks/create" element={<TaskForm />} />
          <Route path="/tasks/:id" element={<TaskForm />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export { App };
