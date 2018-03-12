import React from 'react';

class ChatRight extends React.Component {
  render() {
    return (
      <center>
        <div className="chatRight">
          <p id="friendsRight">Friends</p>
          <br />
          <div className="imageAndNameParentRight">
              <img className="personImage rightPersonImage" src="../images/chris_profile_cropped.jpg"/>
              <p className="name rightName">Christopher King</p>
          </div>
          <div className="imageAndNameParentRight">
              <img className="personImage rightPersonImage" src="../images/chris_profile_cropped.jpg"/>
              <p className="name rightName">Christopher King</p>
          </div>
          <div className="imageAndNameParentRight">
              <img className="personImage rightPersonImage" src="../images/chris_profile_cropped.jpg"/>
              <p className="name rightName">Christopher King</p>
          </div>
          <div className="imageAndNameParentRight">
              <img className="personImage rightPersonImage" src="../images/chris_profile_cropped.jpg"/>
              <p className="name rightName">Christopher King</p>
          </div>
        </div>
      </center>
    );
  }
}

export default ChatRight;
