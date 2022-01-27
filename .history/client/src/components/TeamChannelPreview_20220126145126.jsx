import React from 'react';
import {Avatar,useChatContext} from "stream-chat-react"

const Teamchannelpreview = ({channel,type}) => {
    const {channel:activeChannel,client} = useChatContext()
    const ChannelPreview =() =>{
        <p className="channel-preview__icon">
            #{channel?.data?.name || channel?.data?.id} 
        </p>
    }
    const DirectPreview = () =>{
        const members = Object.values(channel.state.members).filter(({member})=>{user.id!==client.userID})
        return (
            <div className="channel-preview__item single">
                
            </div>
        )
    }
    return (
        <div>
            
        </div>
    );
}

export default Teamchannelpreview;
