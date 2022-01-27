import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";

import Cookies from "universal-cookie";
import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";
import Channelsearch from "./ChannelSearch";
import Teamchannellist from "./TeamChannelList";
const SideBar = () => {
  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={HospitalIcon} alt="" width="30" />
        </div>
      </div>
      <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner">
          <img src={LogoutIcon} alt="" width="30" />
        </div>
      </div>
    </div>
  );
};
const CompanyHeader = () => {
  return (
    <div className="channel-list__header">
      <p className="channel-list__header__text">Player</p>
    </div>
  );
};
const Channelcontainer = () => {
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <Channelsearch/>
        <ChannelList filters={{}}
            channelRenderFilterFn={()=>{}}
        //     // List={(listProps)=>{
        //     //     // <Teamchannellist {...listProps}
        //     //     //     type="team"
        //     //     // />
        //     // }}
         />
      </div>
    </>
  );
};

export default Channelcontainer;
