import React from 'react';
import ChatItemLeft from './ChatItemLeft';
import ChatItemRight from './ChatItemRight';

class ChatMain extends React.Component {
  render() {
    return (
        <div className="chatMain">
          <ChatItemLeft />
          <br />
          <ChatItemRight />
        </div>
    );
  }
}

export default ChatMain;
