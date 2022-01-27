import React from 'react';
import {StreamChat} from "stream-chat"
import {Chat} from "stream-chat-react"
import Cookies from "universal-cookie"
import Channelcontainer from './components/ChannelContainer';
import Channellistcontainer from './components/ChannelListContainer';
import "./App.css"
const apiKey ='2h3wwevsygye'
const authToken = false
const client = StreamChat.getInstance(apiKey)
const App = () => {
  return (
    <div className='app__wrapper'>
    
      <Chat client={client} theme="team light">
        <Channellistcontainer/>
        <Channelcontainer/>
      </Chat>
    </div>
  );
}

export default App;
