import { Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import DetailView from "./components/DetailView";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/item/:id" element={<DetailView />} />
      </Route>
    </Routes>
  );
}

export default App;