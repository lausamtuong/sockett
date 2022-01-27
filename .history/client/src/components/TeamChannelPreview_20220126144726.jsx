import React from 'react';
import {Avatar,useChatContext} from "stream-chat-react"

const Teamchannelpreview = ({channel,type}) => {
    const {channel:activeChannel,client} = useChatContext()
    const ChannelPreview =() =>{
        <p className="channel-preview__icon">
            #
        </p>
    }
    return (
        <div>
            
        </div>
    );
}

export default Teamchannelpreview;
