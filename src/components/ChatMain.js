import React from 'react';
import { Link } from 'react-router-dom';
import ChatItem from './ChatItem';

class ChatMain extends React.Component {
  render() {
    return (
      <center>
        <div className="chatMain">
          <h1>Chat Main Page</h1>
          <br />
          <ChatItem />
        </div>
      </center>
    );
  };
};

export default ChatMain;
