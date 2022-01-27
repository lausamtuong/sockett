import React from 'react';
import {StreamChat} from "stream-chat"
import {Chat} from "stream-chat-react"
import Cookies from "universal-cookie"
import Channellistcontainer from './components/ChannelListContainer';
const apiKey ='2h3wwevsygye'
const client = StreamChat.getInstance(apiKey)
const App = () => {
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme="team light">
        <Channellistcontainer/>
        <Channellistcontainer/>
      </Chat>
    </div>
  );
}

export default App;
