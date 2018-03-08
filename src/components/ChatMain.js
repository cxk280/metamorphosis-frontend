import React from 'react';
import ChatItemLeft from './ChatItemLeft';
import ChatItemRight from './ChatItemRight';

class ChatMain extends React.Component {
  render() {
    return (
        <div className="chatMain">
          <div className="chatMessages">
            <ChatItemLeft />
            <br />
            <ChatItemRight />
          </div>
        </div>
    );
  }
}

export default ChatMain;
