import React from 'react';

class ChatBottom extends React.Component {
  render() {
    return (
      <center>
        <div className="chatBottom">
          <form action="/chatMessage" method="post" name="chatMessageForm" className="chatTextareaForm">
            <textarea className="chatTextarea" placeholder="Type something..."/>
          </form>
        </div>
      </center>
    );
  }
}

export default ChatBottom;
