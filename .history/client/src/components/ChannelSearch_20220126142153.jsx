import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";
import { SearchIcon } from "../assets";

const Channelsearch = () => {
    const [query,setQuery] = useState('')
    const [loading,setLoading] = useState(false)
    const getChannels = async()
    const onSearch = (e) =>{
        e.preventDefault()
        setLoading(true)
        setQuery(e.target.value)
        getChannels(e.target.value)
    }
  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
          <div className="channel-search__input__icon">
              <SearchIcon/>
          </div>
          <input className="channel-search__input__text" placeholder="Search" type="text" value={query} onChange={onSearch}/>
      </div>
    </div>
  );
};

export default Channelsearch;
