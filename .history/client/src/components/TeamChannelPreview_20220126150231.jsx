import React from "react";
import { Avatar, useChatContext } from "stream-chat-react";

const Teamchannelpreview = ({ channel, type }) => {
  const { channel: activeChannel, client } = useChatContext();
  const ChannelPreview = () => (
      <>
    <p className="channel-preview__icon">
      #{channel?.data?.name || channel?.data?.id}
    </p>

      </>
  );

  const DirectPreview = () => {
    const members = Object.values(channel.state.members).filter(({ user }) => {
      user.id !== client.userID;
    });
    return (
      <div className="channel-preview__item single">
        <Avatar
          image={members[0]?.user?.image}
          name={members[0]?.user?.fullname}
          size={24}
        />
        <p>{members[0]?.user?.fullname}</p>
      </div>
    );
  };
  return (
    <div
      className={
        channel?.id === activeChannel?.id
          ? "channel-preview__wrapper__selected"
          : "channel-preview__wrapper"
      }
      onClick={() => {}}
    ></div>
  );
};

export default Teamchannelpreview;
