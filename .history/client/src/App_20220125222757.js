import io from "socket.io-client"
import {useState,useEffect} from "react"
import './App.css';
const socket = io.connect("http://localhost:3000")
function App() {
  const [state,setState] = useState({message})
  return (
    <div className="App">

    </div>
  );
}

export default App;