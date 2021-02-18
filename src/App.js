import { useEffect, useState } from "react";
import queryString from "query-string";
import Clock from "./components/Clock";
import MagicBox from "./components/MagicBox";

function App() {
  const [showClock, setShowClock] = useState(true);
  return (
    <div className="app">
      <div>Welcome to study React Hook</div>
      <div>React Hooks - Customer Hooks</div>
      <MagicBox />
    </div>
  );
}

export default App;
