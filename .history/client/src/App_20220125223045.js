import io from "socket.io-client"
import {useState,useEffect} from "react"
import './App.css';
const socket = io.connect("http://localhost:3000")
function App() {
  const [state,setState] = useState({message:"",name:""})
  const [chat,setChat] = useState()
  const onMessageSubmit = (e) =>{
      e.pre
  }
  return (
    <div className="App">
    <form onSubmit={onMessageSubmit}>
      <input onChange={e=>onTextChange(e)} />
      <button type="submit">Send</button>
    </form>
    </div>
  );
}

export default App;
