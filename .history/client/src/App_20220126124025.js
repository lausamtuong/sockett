import React from 'react';
import {StreamChat} from "stream-chat"
import {Chat} from "stream-chat-react"
import Cookies from "universal-cookie"
const apiKey =''
const client = StreamChat.getI
const App = () => {
  return (
    <div className='app__wrapper'>
      <Chat>
        <ChannelListContainer/>
        <ChannelContainer/>
      </Chat>
    </div>
  );
}

export default App;
