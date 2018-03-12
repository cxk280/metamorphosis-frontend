import React from 'react';

class ChatItemLeft extends React.Component {
  render() {
    return (
      <div>
          <div className="imageParentMain">
              <img className="personImage chatImageLeft" src="../images/chris_profile_cropped.jpg"/>
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
