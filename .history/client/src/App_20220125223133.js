import io from "socket.io-client"
import {useState,useEffect} from "react"
import './App.css';
const socket = io.connect("http://localhost:3000")
function App() {
  const [state,setState] = useState({message:"",name:""})
  const [chat,setChat] = useState()
  const onMessageSubmit = (e) =>{
      e.preventDefault()
  }
  const onTextChange = ()=>{

  }
  return (
    <div className="App">
    <form onSubmit={onMessageSubmit}>
      <input onChange={e=>onTextChange(e)} />
      <button type="submit">Send</button>
    </form>
    <div>
      <h1>Chat log</h1>
      {renderChat()}
    </div>
    </div>
  );
}

export default App;
