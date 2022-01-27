import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import { ChannelSearch, TeamChannel, TeamChannelPreview } from "./";
import Cookies from "universal-cookie";
import HospitalIcon from "../assets/hospital.png"
import LogoutIcon from "../assets/logout."
const SideBar = () => {
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
            <img src={HospitalIcon} alt='' width='30'/>
        </div>
    </div>
    <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner">
            <img src={HospitalIcon} alt='' width='30'/>
        </div>
    </div>
  </div>;
};
const Channelcontainer = () => {
  return <div></div>;
};

export default Channelcontainer;
