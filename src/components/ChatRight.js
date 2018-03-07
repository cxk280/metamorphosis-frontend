import React from 'react';
import { Link } from 'react-router-dom';

class ChatRight extends React.Component {
  render() {
    return (
      <center>
        <div className="chatRight">
          <p id="friendsRight">Friends</p>
          <br />
          <div className="imageAndNameParentRight">
              <img className="personImage rightPersonImage" src="http://via.placeholder.com/73x73"/>
              <p className="name rightName">Vickie Reed</p>
          </div>
          <div className="imageAndNameParentRight">
              <img className="personImage rightPersonImage" src="http://via.placeholder.com/73x73"/>
              <p className="name rightName">Vickie Reed</p>
          </div>
          <div className="imageAndNameParentRight">
              <img className="personImage rightPersonImage" src="http://via.placeholder.com/73x73"/>
              <p className="name rightName">Vickie Reed</p>
          </div>
          <div className="imageAndNameParentRight">
              <img className="personImage rightPersonImage" src="http://via.placeholder.com/73x73"/>
              <p className="name rightName">Vickie Reed</p>
          </div>
        </div>
      </center>
    );
  };
};

export default ChatRight;
