import React from 'react';

class ChatItem extends React.Component {
  render() {
    return (
      <div>
        <center>
          <div className="imageParentMain">
              <img className="personImage mainPersonImage" src="http://via.placeholder.com/49x49"/>
              <p className="name rightName">Vickie Reed</p>
          </div>
          <div className="chatMessage">
            <p>Chat Item</p>
          </div>
        </center>
      </div>
    );
  }
}

export default ChatItem;
