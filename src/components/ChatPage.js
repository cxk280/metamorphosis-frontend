import React from 'react';
import { Link } from 'react-router-dom';
import ChatMain from './ChatMain';
import ChatTop from './ChatTop';
import ChatBottom from './ChatBottom';

class ChatPage extends React.Component {
  render() {
    return (
      <div className="chatPage">
          <ChatTop />
          <ChatMain />
          <ChatBottom />
      </div>
    );
  };
};

export default ChatPage;
