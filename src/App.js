import { useEffect, useState } from "react";
import queryString from "query-string";
import Clock from "./components/Clock";

function App() {
  const [showClock, setShowClock] = useState(true);
  return (
    <div className="app">
      <div>Welcome to study React Hook</div>
      <div>React Hooks - Posts List</div>

      {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide Clock</button>
    </div>
  );
}

export default App;
