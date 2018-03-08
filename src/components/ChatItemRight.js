import React from 'react';

class ChatItemRight extends React.Component {
  render() {
    return (
      <div>
          <div className="imageParentMain">
              <img className="personImage mainPersonImageRight" src="http://via.placeholder.com/49x49"/>
              <p className="name rightName">Vickie Reed</p>
          </div>
          <div className="chatMessage">
            <p>Chat Item</p>
          </div>
      </div>
    );
  }
}

export default ChatItemRight;
