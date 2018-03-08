import React from 'react';

class ChatItemRight extends React.Component {
  render() {
    return (
      <div>
          <div className="imageParentMain">
              <img className="personImage chatImageRight" src="http://via.placeholder.com/49x49"/>
          </div>
          <div className="chatMessageRight">
            <p className="chatTextRight">Chat message</p>
          </div>
          <div className="chatTimeRight">
            <p>Chat time</p>
          </div>
      </div>
    );
  }
}

export default ChatItemRight;
