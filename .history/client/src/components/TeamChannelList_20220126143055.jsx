import React from 'react';
import {Addchannel} from "../assets"
const Teamchannellist = ({childrem,loading,error=false,type}) => {
    if(error)
        return type ==='team'?(<div className='team-channel-list'>
            <p className='team-channel'></p>
        </div>):null
    return (
        <div>
            
        </div>
    );
}

export default Teamchannellist;