import React from 'react';
import { Link } from 'react-router-dom';

class ChatTop extends React.Component {
  render() {
    return (
        <div className="chatTop">
          <p id="chattingWith">Chatting with</p>
            <div className="imageAndNameParentTop">
                <img className="personImage topPersonImage" src="http://via.placeholder.com/73x73"/>
                <p className="name topName">Vickie Reed</p>
            </div>
        </div>
    );
  };
};

export default ChatTop;
