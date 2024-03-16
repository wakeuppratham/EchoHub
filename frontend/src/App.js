import { Routes , Route } from "react-router-dom";
import "./App.css";

import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" exact element={<Homepage />}></Route>
      <Route path="/chats" element={<Chatpage/>} />
      </Routes>

    </div>
  );
}

export default App;