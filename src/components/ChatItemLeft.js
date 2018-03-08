import React from 'react';

class ChatItemLeft extends React.Component {
  render() {
    return (
      <div>
          <div className="imageParentMain">
              <img className="personImage chatImageLeft" src="http://via.placeholder.com/49x49"/>
          </div>
          <div className="chatMessageLeft">
            <p className="chatTextLeft">Chat message</p>
          </div>
          <div className="chatTimeLeft">
            <p>Chat time</p>
          </div>
      </div>
    );
  }
}

export default ChatItemLeft;
