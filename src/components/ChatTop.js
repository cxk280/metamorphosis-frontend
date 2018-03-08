import React from 'react';

class ChatTop extends React.Component {
  render() {
    return (
      <center>
        <div className="chatTop">
          <p id="chattingWith">Chatting with</p>
            <div className="imageAndNameParentTop">
                <img className="personImage topPersonImage" src="http://via.placeholder.com/73x73"/>
                <p className="name topName">Vickie Reed</p>
            </div>
        </div>
      </center>
    );
  }
}

export default ChatTop;
