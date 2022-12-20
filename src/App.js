import { Routes, Route } from "react-router-dom";
import PlanPage from "./pages/plan";
import LogPage from "./pages/log";
import Home from "./pages/Home";
import LogEntry from "./pages/LogEntry";
import Overview from "./pages/Overview";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log" element={<LogPage />} />
        <Route path="/plan" element={<PlanPage />} />
        <Route path="/NewRecord" element={<LogEntry />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </>
  );
}

export default App;
