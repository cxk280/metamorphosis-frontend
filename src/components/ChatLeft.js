import React from 'react';
import { Link } from 'react-router-dom';

class ChatLeft extends React.Component {
  render() {
    return (
      <center>
        <div className="chatLeft">
          <div className="imageParentChatLeft">
            <img className="metamorphosisLogo" src="../images/Metamorphosis-Logo-Final.svg"/>
          </div>
          <div>
            <form action="/logout" method="get" name="logoutForm">
              <input className="chatLeftLogout" type="submit" value="Logout" />
            </form>
          </div>
        </div>
      </center>
    );
  };
};

export default ChatLeft;
