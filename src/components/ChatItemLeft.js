import React from 'react';

class ChatItemLeft extends React.Component {
  render() {
    return (
      <div>
          <div className="imageParentMain">
              <img className="personImage mainPersonImageLeft" src="http://via.placeholder.com/49x49"/>
              <p className="name rightName">Vickie Reed</p>
          </div>
          <div className="chatMessage">
            <p>Chat Item</p>
          </div>
      </div>
    );
  }
}

export default ChatItemLeft;
