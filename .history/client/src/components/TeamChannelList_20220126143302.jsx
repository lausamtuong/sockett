import React from "react";
import { Addchannel } from "../assets";
const Teamchannellist = ({ childrem, loading, error = false, type }) => {
  if (error)
    return type === "team" ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          Connection Error, please try again!
        </p>
      </div>
    ) : null;
    if(loading) return (
        <div className="team-channel-list">
          <p className="team-channel-list__message loading">
            {type==="team"?"Channels":"Messages"} ... Loading
          </p>
        </div>
      ) 
  return <div className='team-channel-list'>
<div className='team-channel-list__header'
  </div>;
};

export default Teamchannellist;
