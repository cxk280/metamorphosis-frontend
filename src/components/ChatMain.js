import React from 'react';
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
  }
}

export default ChatMain;
