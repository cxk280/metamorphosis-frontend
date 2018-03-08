import React      from 'react';
import ChatMain   from './ChatMain';
import ChatTop    from './ChatTop';
import ChatBottom from './ChatBottom';
import ChatLeft   from './ChatLeft';
import ChatRight  from './ChatRight';

class ChatPage extends React.Component {
  render() {
    return (
      <div className="chatPage">
          <ChatLeft />
          <ChatTop />
          <ChatRight />
          <ChatMain />
          <ChatBottom />
      </div>
    );
  }
}

export default ChatPage;
