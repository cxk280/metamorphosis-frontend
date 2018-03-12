import React from 'react';

class ChatTop extends React.Component {
  render() {
    return (
      <center>
        <div className="chatTop">
          <p id="chattingWith">Chatting with</p>
            <div className="imageAndNameParentTop">
                <img className="personImage topPersonImage" src="../images/chris_profile_cropped.jpg"/>
                <p className="name topName">Christopher King</p>
            </div>
        </div>
      </center>
    );
  }
}

export default ChatTop;
